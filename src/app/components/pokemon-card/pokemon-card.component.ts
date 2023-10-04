import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PokemonData, Types } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit, OnChanges {
  @Input()
  pokemonName: string = ""
  pokemonData: PokemonData
  pokemonLoaded: boolean = false
  notFound: boolean = false;

  constructor(
    private service: PokemonService
  ) {
   this.pokemonData = {
      id: 0,
      name: '',
      sprites: {
        front_default: '',
      },
      types: []
    }
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['pokemonName'] && !changes['pokemonName'].firstChange) {
      this.loadPokemonData();
    }
  }

  private loadPokemonData(): void {
    this.notFound = false;
    if (this.pokemonName !== "") {
      this.service.getPokemon(this.pokemonName).subscribe(
        {
          next: (res) => {
            const { id, name, sprites, types } = res;
            this.pokemonData = { id, name, sprites, types };
            this.pokemonLoaded = true;
          },
          error: (err) => {
            console.log(err)
            this.notFound = true;
          }
        }
      );
    }
  }
}
