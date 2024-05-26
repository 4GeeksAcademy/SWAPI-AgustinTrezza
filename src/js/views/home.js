import React, { useState, useEffect } from "react";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";

export const Home = () => {
    const [loading, setLoading] = useState(true);
    const [charactersLoading, setCharactersLoading] = useState(true);
    const [planetsLoading, setPlanetsLoading] = useState(true);

    useEffect(() => {
        let charactersTimer, planetsTimer;

        const charactersPromise = new Promise((resolve) => {
            charactersTimer = setTimeout(() => {
                resolve();
            }, 2000); // Tiempo máximo de carga para los personajes (2 segundos)
        });

        const planetsPromise = new Promise((resolve) => {
            planetsTimer = setTimeout(() => {
                resolve();
            }, 2000); // Tiempo máximo de carga para los planetas (2 segundos)
        });

        Promise.all([charactersPromise, planetsPromise]).then(() => {
            setLoading(false);
        });

        return () => {
            clearTimeout(charactersTimer);
            clearTimeout(planetsTimer);
        };
    }, []);

    return (
        <div style={{ backgroundImage: 'url(https://res.cloudinary.com/djpifu0cl/image/upload/v1714177451/estrellas3_kfmar8.jpg)' }}>
            {loading ? (
                <div className="text-center bg-image-caracter">
                    <div className="spinner-border text-light" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                    <p className="text-light mt-2"></p>
                </div>
            ) : (
                <>
                    <Characters setCharactersLoading={setCharactersLoading} />
                    <Planets setPlanetsLoading={setPlanetsLoading} />
                </>
            )}
        </div>
    );
};
