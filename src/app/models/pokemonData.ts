export type Types = {
  slot: number;
  type: {
    name: string;
  }
}

export type PokemonData = {
  id: number;
  name:string;
  sprites: {
    front_default: ''
  };
  types: Types[],
}
