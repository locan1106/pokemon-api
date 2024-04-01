import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonCollection from "./components/PokemonCollection";
import { PokemonInfo, PokemonUrl } from "./interface";

const App: React.FC = () => {
	const [pokemons, setPokemons] = useState<PokemonInfo[]>([]);
	const [nextUrl, setNextUrl] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const getPokemon = async () => {
			const res = await axios.get(
				"https://pokeapi.co/api/v2/pokemon?limit=20?offset=20"
			);

			console.log(res.data);

			setNextUrl(res.data.next);

			res.data.results.forEach(async (pokemon: PokemonUrl) => {
				const poke = await axios.get(
					`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
				);

				setPokemons((p) => [...p, poke.data]);
			});
		};

		getPokemon();
	}, []);

	const showMore = async () => {
		setLoading(true);
		let res = await axios.get(nextUrl);
		setNextUrl(res.data.next);
		res.data.results.forEach(async (pokemon: PokemonUrl) => {
			const poke = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
			);
			setPokemons((p) => [...p, poke.data]);
		});
		setLoading(false);
	};

	return (
		<div className="App">
			<div className="container">
				<header className="pokemon-header">Pokemon</header>
				<PokemonCollection pokemons={pokemons} />
			</div>
			<div className="btn">
				<button onClick={showMore}>
					{loading ? "Loading..." : "Load More"}
				</button>
			</div>
		</div>
	);
};

export default App;
