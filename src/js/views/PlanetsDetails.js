// PlanetsDetails.js
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsDetails = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	const [planet, setPlanet] = useState(null);

	useEffect(() => {
		const fetchPlanetDetails = async () => {
			const data = await actions.fetchPlanetDetails(store.planets[id - 1].url);
			setPlanet(data);
		};
		fetchPlanetDetails();
	}, []);

	if (!planet) {
		return <h1>Loading...</h1>;
	}

	return (
		<div style={{backgroundImage: 'url(https://res.cloudinary.com/djpifu0cl/image/upload/v1714177451/estrellas3_kfmar8.jpg)'}}>
		<div className="container pt-5">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<div className="card">
						<img src={`https://via.placeholder.com/150?text=${planet.name}`} className="img-fluid imagen-card" alt={planet.name} />
						<div className="card-body">
							<h5 className="card-title">{planet.name}</h5>
							<p className="card-text">
								<strong>Climate:</strong> {planet.climate}
								<br />
								<strong>Terrain:</strong> {planet.terrain}
								<br />
								<strong>Population:</strong> {planet.population}
							</p>
							<Link to="/" className="btn btn-primary">
								Back to Home
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
	);
};
