import { Injectable } from '@angular/core';
import { HEROES } from '../model/mock-heroes';
import { Hero } from '../model/hero';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
