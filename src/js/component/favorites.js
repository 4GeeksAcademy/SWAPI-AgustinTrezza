import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favorites = () => {
  const { store, actions } = useContext(Context);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const removeFromFavorites = (index) => {
    actions.removeFromFavorites(index);
  };

  return (
    <div className="position-fixed end-0 top-0 m-4" style={{ zIndex: 1000 }}>
      <div className="dropdown">
        <button className="btn btn-favorite fs-6 dropdown-toggle bg-black-transparent" type="button" id="dropdownMenuButton" onClick={toggleDropdown}>
          Favorites{" "}
          <span style={{ backgroundColor: 'red', borderRadius: '2px', color: 'white', padding: '2px 6px', marginLeft: '3px', marginRight: '3px' }}>{store.favorites.length}</span>
        </button>
        <div className={`dropdown-custom dropdown-menu ${dropdownOpen ? "show dropdown-custom" : ""}`} aria-labelledby="dropdownMenuButton" style={{ right: 0 }}>
          {store.favorites.length === 0 ? (
            <span className="dropdown-item">No favorites yet</span>
          ) : (
            <ul className="list-group">
              {store.favorites.map((favorite, index) => (
                <li key={index} className="list-group-item item-favorite d-flex justify-content-between align-items-center">
                  <Link to={`/planet/${favorite.id}`}>
                    {favorite.name}
                  </Link>
                  <i className="fa fa-trash text-danger" onClick={() => removeFromFavorites(index)}></i>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
