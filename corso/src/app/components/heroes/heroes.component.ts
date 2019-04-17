import { Component, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';
import { HeroesService } from 'src/app/services/heroes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  title = 'Default';
  clickedHero: Hero;

  constructor(public hs: HeroesService) { }

  ngOnInit() {
    this.hs.getHeroes().subscribe(h => {
      this.heroes = h.filter(hero => hero.id % 2 === 0);
    });
  }

  doClick(h: Hero) {
    this.clickedHero = h;
  }
}
