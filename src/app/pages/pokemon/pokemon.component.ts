import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  searchName: string = "";
  pokemonName: string = "";

  handleChange(searchName: string): void {
    this.searchName = searchName;
  }
  searchPokemon(): void {
    this.pokemonName = this.searchName;
  }
}
