import React from "react";
import { PokemonInfo } from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css";

interface Props {
	pokemons: PokemonInfo[];
}

const PokemonCollection: React.FC<Props> = ({ pokemons }: Props) => {
	return (
		<section className="collection-container">
			{pokemons.map((pokemon) => {
				return (
					<div className="">
						<PokemonList
							key={pokemon.id}
							name={pokemon.name}
							id={pokemon.id}
							image={pokemon.sprites.front_default}
						/>
					</div>
				);
			})}
		</section>
	);
};

export default PokemonCollection;
