import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchPlanets();
  }, []);

  const addToFavorites = (planet) => {
    actions.addToFavorites(planet);
  };

  return (
    <div className="container mt-3 container-planets">
      <h1 className="text-start text-danger mb-4 titulo-fuente">Planets</h1>
      <div className="row">
        {store.planets.map((planet, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <div className="card border-0 shadow bg-light bg-black margin-images">
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${index + 1}.jpg`}
                onError={(e) => {
                  e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}
                className="img-fluid imagen-card"
                alt={planet.name}
              />
              <div className="card-body card-body-custom">
                <h5 className="card-title">{planet.name}</h5>
                <p className="card-text">
                  <strong>URL:</strong> {planet.url}
                </p>
                <div className="container-buttons">
                  <Link to={`/planet/${index + 1}`} className="btn btn-outline-primary shadow mr-2">
                    Read More!
                  </Link>
                  <button
                    className="btn btn-outline-warning icono-corazon"
                    onClick={() => addToFavorites(planet)}
                    disabled={store.favorites.some((favorite) => favorite.name === planet.name)}
                  >
                    <i className="fa fa-heart"></i>
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
