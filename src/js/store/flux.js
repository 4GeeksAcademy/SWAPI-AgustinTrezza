import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
			planets: [],
			characters: []
		},
		actions: {
			addToFavorites: (item) => {
				const store = getStore();
				if (!store.favorites.some((favorite) => favorite.name === item.name)) {
					const updatedFavorites = [...store.favorites, item];
					setStore({ favorites: updatedFavorites });
					localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
					toast.info("Successfully added to favorites", { theme: "dark", toastStyle: { backgroundColor: "blue" } });
				} else {
					toast.warn("¡Este elemento ya está en favoritos!");
				}
			},
			removeFromFavorites: (index) => {
				const store = getStore();
				const removedItem = store.favorites[index];
				const updatedFavorites = store.favorites.filter((favorite, i) => i !== index);
				setStore({ favorites: updatedFavorites });
				localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
				toast.error(`Removed from favorites: ${removedItem.name}`, { theme: "dark" });
			},
			fetchCharacters: async () => {
				const response = await fetch("https://www.swapi.tech/api/people?page=1&limit=9");
				const data = await response.json();
				setStore({ characters: data.results });
			},
			fetchCharacterDetails: async (url) => {
				const response = await fetch(url);
				const data = await response.json();
				return data.result.properties;
			},
			fetchPlanets: async () => {
				const response = await fetch("https://www.swapi.tech/api/planets?page=1&limit=6");
				const data = await response.json();
				setStore({ planets: data.results });
			},
			fetchPlanetDetails: async (url) => {
				const response = await fetch(url);
				const data = await response.json();
				return data.result.properties;
			}
		}
	};
};

export { getState, ToastContainer };
