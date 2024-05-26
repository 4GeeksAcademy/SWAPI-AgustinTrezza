import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchCharacters();
	}, []);

	const addToFavorites = (character) => {
		actions.addToFavorites(character);
	};

	return (
		<div className="container-custom-chico padding-top">
			<h1 className="text-start text-danger titulo-fuente mb-4">Characters</h1>
			<div className="row mb-4">
				{store.characters.map((character, index) => (
					<div key={index} className="col-lg-4 col-md-6 margin-images px-0">
						<div className="card shadow border-0 bg-light bg-black">
							<img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="img-fluid imagen-card" alt={character.name} />
							<div className="card-body pt-0 card-body-custom">
								<h5 className="card-title">{character.name}</h5>
								<p className="card-text">
									<strong>URL:</strong> {character.url}
								</p>
								<div className="container-buttons">
									<Link to={`/movie/${index + 1}`} className="btn btn-outline-primary mr-2">
										See character!
									</Link>
									<button
										className="btn btn-outline-warning"
										onClick={() => addToFavorites(character)}
										disabled={store.favorites.some((favorite) => favorite.name === character.name)}
									>
										<i className="fa fa-heart icono-corazon"></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
