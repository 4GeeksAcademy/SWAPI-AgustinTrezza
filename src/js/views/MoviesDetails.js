import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const MovieDetails = () => {
    const { id } = useParams();
    const { store, actions } = useContext(Context);
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            if (store.characters.length > 0 && id > 0 && id <= store.characters.length) {
                const data = await actions.fetchCharacterDetails(store.characters[id - 1].url);
                setCharacter(data);
            }
        };
        fetchCharacterDetails();
    }, [id, store.characters, actions]);

    if (!character) {
        return <div className="bg-image-caracter"><h1 className="text-loading">Loading...</h1></div>
    }

    return (
        <div className="bg-image-caracter" style={{ backgroundImage: 'url(https://res.cloudinary.com/djpifu0cl/image/upload/v1714177451/estrellas3_kfmar8.jpg)' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card card-border">
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="img-fluid" alt={character.name} />
                                </div>
                                <div className="col-md-6 bg-black text-white">
                                    <div className="card-body">
                                        <h5 className="card-title-character">{character.name}</h5>
                                        <p className="card-text-character">
                                            <strong>Height:</strong> {character.height}
                                            <br />
                                            <strong>Mass:</strong> {character.mass}
                                            <br />
                                            <strong>Hair Color:</strong> {character.hair_color}
                                            <br />
                                            <strong>Eye Color:</strong> {character.eye_color}
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
            </div>
        </div>
    );
};
