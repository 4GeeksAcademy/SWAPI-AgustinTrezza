import React from "react";
import { motion } from "framer-motion";

const BotoneraRedes = ({ bottom, onClose }) => {
  const openYoutube = () => {
    window.open("https://www.youtube.com/@agustintrezza8490/videos");
  };

  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/agustin-trezza-920a5358/recent-activity/all/");
  };

  const openLinktree = () => {
    window.open("https://linktr.ee/agustintrezzadev");
  };

  const openGithub = () => {
    window.open("https://github.com/Agustintrezza");
  };

  return (
    <motion.div
      className="container-botonera3"
      drag="y"
      dragConstraints={{ top: -250, bottom: 30 }}
    >
      <motion.button
        className="boton-botonera"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={openYoutube}
      >
        <i className="fab fa-youtube" style={{ fontSize: "22px" }}></i>
      </motion.button>
      <motion.button
        className="boton-botonera"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={openLinkedIn}
      >
        <i className="fab fa-linkedin" style={{ fontSize: "22px" }}></i>
      </motion.button>
      <motion.button
        className="boton-botonera"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={openLinktree}
      >
        <i className="fas fa-link" style={{ fontSize: "22px" }}></i>
      </motion.button>
      <motion.button
        className="boton-botonera"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={openGithub}
      >
        <i className="fab fa-github" style={{ fontSize: "22px" }}></i>
      </motion.button>
      <motion.button
        className="boton-botonera text-danger"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
      >
        <i className="fas fa-times" style={{ fontSize: "22px" }}></i>
      </motion.button>
    </motion.div>
  );
};

export default BotoneraRedes;
