import React, { useEffect, useState } from "react";
import "./pokemon.css";
import { Detail, PokemonDetail } from "../interface";

interface Props {
	viewDetail: Detail;
	setViewDetail: React.Dispatch<React.SetStateAction<Detail>>;
	id: number;
	name: string;
	image: string;
	abilities:
		| {
				ability: {
					name: string;
				};
		  }[]
		| undefined;
}

const PokemonList: React.FC<Props> = ({
	id,
	name,
	image,
	abilities,
	viewDetail,
	setViewDetail,
}: Props) => {
	const [isSelected, setIsSelected] = useState(false);

	useEffect(() => {
		setIsSelected(id === viewDetail?.id);
	}, [viewDetail]);

	const closeDetail = () => {
		setViewDetail({
			id: 0,
			isOpened: false,
		});
	};

	return (
		<div className="">
			{isSelected ? (
				<section className="pokemon-list-detailed">
					<div className="detail-container">
						<p className="detail-close" onClick={closeDetail}>
							X
						</p>
						<div className="detail-info">
							<img src={image} alt="pokemon" className="detail-img" />
							<p className="detail-name"> {name}</p>
						</div>
						<div className="detail-skill">
							<p className="detail-ability"> Ablities: </p>
							{abilities?.map((ab, index: number) => {
								return (
									<div key={index} className="">
										{" "}
										{ab.ability.name}
									</div>
								);
							})}
						</div>
					</div>
				</section>
			) : (
				<section className="pokemon-list-container">
					<p className="pokemon-name"> {name} </p>
					<img src={image} alt="pokemon" />
				</section>
			)}
		</div>
	);
};

export default PokemonList;
