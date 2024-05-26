import React from "react";
import { Link } from "react-router-dom";
import { Favorites } from "./../component/favorites";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav
      className="navbar navbar-light bg-light p-0 contenedor-logo"
      style={{
        zIndex: 1000,
        backgroundImage:
          "url(https://res.cloudinary.com/djpifu0cl/image/upload/v1714177451/estrellas3_kfmar8.jpg)",
      }}
    >
      <motion.div
        className="container d-flex align-items-center"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: 0, y: 0 }}
      >
        <Link to="/" className="position-fixed start-0 top-0 m-0 p-0">
          <img
            src="https://res.cloudinary.com/djpifu0cl/image/upload/v1714241663/starwars_lykdof.png"
            alt="logo-starwars"
            className="logo"
          />
        </Link>
        <div className="">
          <Favorites />
        </div>
      </motion.div>
    </motion.nav>
  );
};
