import { Injectable } from '@angular/core';
import { HEROES } from './heroes.mock';
import { Hero } from './hero.class';
import { Observable, of } from 'rxjs';


// By default,
// the Angular CLI command ng generate service registers a provider
// with the root injector for your service by including provider metadata in the @Injectable decorator.

// root
// When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it.
// Registering the provider in the @Injectable metadata also allows Angular to optimize an app by removing the service if it turns out not to be used after all.
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }

}
