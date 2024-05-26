import React, { useState } from "react";
import { motion } from "framer-motion";
import Music from "../component/music";
import BotoneraRedes from "../component/botoneraRedes";

const Botonera = () => {
  const [showMusicPlayer, setShowMusicPlayer] = useState(false);
  const [showBotoneraRedes, setShowBotoneraRedes] = useState(true);

  const toggleMusicPlayer = () => {
    setShowMusicPlayer(!showMusicPlayer);
  };

  const toggleBotoneraRedes = () => {
    setShowBotoneraRedes(!showBotoneraRedes);
  };

  return (
    <>
      <motion.div
        className="container-botonera"
        drag="y"
        dragConstraints={{ top: -250, bottom: 30 }}
        style={{
          position: "fixed",
          left: "-2px",
          bottom: "70px",
          cursor: "grab"
        }}
        onDragStart={(event, info) => {
          event.target.style.cursor = "grabbing";
        }}
        onDragEnd={(event, info) => {
          event.target.style.cursor = "grab";
        }}
      >
        <motion.button
          className="boton-botonera"
          style={{ fontSize: "20px" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMusicPlayer}
        >
          <i className="fas fa-volume-up"></i>
        </motion.button>
        <motion.button
          className="boton-botonera"
          style={{ fontSize: "20px" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleBotoneraRedes}
        >
          <i className="fas fa-user"></i>
        </motion.button>
        {/* <motion.button
          className="boton-botonera"
          style={{ fontSize: "20px" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fas fa-arrow-up"></i>
        </motion.button> */}
      </motion.div>
      <Music showMusicPlayer={showMusicPlayer} setShowMusicPlayer={setShowMusicPlayer} />
      {showBotoneraRedes && (
        <BotoneraRedes bottom="70px" onClose={() => setShowBotoneraRedes(false)} />
      )}
    </>
  );
};

export default Botonera;
