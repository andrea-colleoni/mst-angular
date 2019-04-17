import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../model/hero';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  heroId: number;

  constructor(
    private ar: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.heroId = +this.ar.snapshot.paramMap.get('heroId');
  }

}
