import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Champions } from '../champs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
  champions = Champions;
  selectedChamp: Hero;

  constructor(){}
  ngOnInit(): void{
  }

  onSelect(champ: Hero){
    this.selectedChamp = champ;
  }
}
