import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  name: string = "Charmander"
  image: string = ""
  types: string[] = ['fire', 'rock']
  constructor() {}

  ngOnInit(): void {
  }

}
