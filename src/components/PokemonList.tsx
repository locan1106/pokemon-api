import React from "react";
import "./pokemon.css";

interface Props {
	id: number;
	name: string;
	image: string;
}

const PokemonList: React.FC<Props> = ({ id, name, image }: Props) => {
	return (
		<div>
			<section className="pokemon-list-container">
				<p className="pokemon-name">{name}</p>
				<img src={image} alt="pokemon" />
			</section>
		</div>
	);
};

export default PokemonList;
