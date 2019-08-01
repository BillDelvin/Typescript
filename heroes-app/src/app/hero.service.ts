import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MassageService} from './massage.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private massageService : MassageService) {

  }

  getHeroes(): Observable<Hero[]> {
    // TODO : send the message_after_fetching the heroes
    this.massageService.add('HeroService: fetched heroes');
    return of(HEROES);

  }

  getHero(id: number ): Observable<Hero> {
    // TODO: sent the massage_after_fetching the heroes 
    this.massageService.add(`HeroService : fetched hero id=${id}`)
    return of(HEROES.find(hero => hero.id === id));
  }
  
}
