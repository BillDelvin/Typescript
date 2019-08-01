import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MassageService} from './massage.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(id: number) {
    throw new Error("Method not implemented.");
  }
  constructor(private massageService : MassageService) {

  }

  getHeroes(id: number ): Observable<Hero[]> {
    // TODO: sent the massage_after_fetching the heroes 
    this.massageService.add('HeroService : fetched Heroes')
    return of(HEROES);
  }
}
