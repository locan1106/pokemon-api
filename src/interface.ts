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

export interface PokemonDetail extends PokemonInfo {
	abilities?: {
		ability: {
			name: string;
		};
	}[];
}

export interface Detail {
	id: number;
	isOpened: boolean;
}
