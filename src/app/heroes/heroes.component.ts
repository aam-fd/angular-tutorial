import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero.class';
import {HEROES} from '../heroes.mock';

// @Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes', // the component's CSS element selector, matches the name of the HTML element that identifies this component within a parent component's template
  templateUrl: './heroes.component.html', // the location of the component's template file
  styleUrls: ['./heroes.component.css'] // the location of the component's private CSS styles
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes = HEROES;

  selectedHero: Hero;

  constructor() { }

  // lifecycle hook.
  // Angular calls ngOnInit shortly after creating a component. It's a good place to put initialization logic.
  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
