import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { HEROES } from './heroes.mock';
import { Hero } from './hero.class';
import { MessageService } from './message.service';


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

  private heroesUrl = 'api/heroes';  // URL to web api

  // This is a typical "service-in-service" scenario:
  // you inject the MessageService into the HeroService which is injected into the HeroesComponent.
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroes(): Observable<Hero[]> {
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add('HeroService: fetched hero id=${id}');

    return of(HEROES.find(hero => hero.id === id));
  }

    
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
