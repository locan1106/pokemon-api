export interface PokemonUrl {
	name: string;
	url: string;
}

export interface PokemonInfo {
	id: number;
	name: string;
	sprites: {
		front_default: string;
	};
}
