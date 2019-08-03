import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {MassageService} from './massage.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private massageService : MassageService, private http: HttpClient) {

  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  /** Log a HeroService message with the MessageService */
  private log(massage: string){
    this.massageService.add(`HeroService: ${massage} `)
  }

  // URL to web api
  private heroesUrl = 'api/heroes'; 

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * param operation - name of the operation that failed
 * param result - optional value to return as the observable result
 */
  private handleError<T>(operation =  'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('error'); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.massage}`);

      return of(result as T);
    }
  }

  // get heroes fromo server
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(_ => this.log('fetched heroes')),
        catchError(this.handleError<Hero[]>('getHeroes', []))
      )
  }

  getHero(id: number ): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getGHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`update hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero , this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero /w id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id =typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`delete hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHero(term: string): Observable<Hero[]> {
    if(!term.trim()){
      // if not search term, return empty hero array.
      return of([]);
    }

    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}" `)),
      catchError(this.handleError<Hero[]>('searchHeroes',[]))
    );
  }
  
}
