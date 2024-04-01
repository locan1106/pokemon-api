import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonCollection from "./components/PokemonCollection";
import { PokemonInfo, PokemonUrl } from "./interface";

const App: React.FC = () => {
	const [pokemons, setPokemons] = useState<PokemonInfo[]>([]);

	useEffect(() => {
		const getPokemon = async () => {
			const res = await axios.get(
				"https://pokeapi.co/api/v2/pokemon?limit=20?offset=0"
			);

			res.data.results.forEach(async (pokemon: PokemonUrl) => {
				const poke = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
				);

				console.log(res.data);

				setPokemons((p) => [...p, poke.data]);
			});
		};

		getPokemon();
	}, []);

	return (
		<div className="App">
			<div className="container">
				<header className="pokemon-header">Pokemon</header>
				<PokemonCollection pokemons={pokemons} />
			</div>
		</div>
	);
};

export default App;
