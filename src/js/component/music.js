// Music.js
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Music = ({ showMusicPlayer, setShowMusicPlayer }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioRef = useRef(null);
  const songs = [
    {
      title: "Way To Paradise - Lemongrass",
      url: "https://res.cloudinary.com/djpifu0cl/video/upload/v1714350722/Way_To_Paradise_yhv3bd.mp3"
    },
    {
      title: "Main Theme from Star Wars",
      url: "https://res.cloudinary.com/djpifu0cl/video/upload/v1714350978/Main_Theme_from_Star_Wars_eh1msp.mp3"
    }
  ];

  const playSong = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const pauseSong = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const prevSong = () => {
    const newIndex = (currentSong - 1 + songs.length) % songs.length;
    setCurrentSong(newIndex);
    audioRef.current.src = songs[newIndex].url;
    if (isPlaying) audioRef.current.play();
  };

  const nextSong = () => {
    const newIndex = (currentSong + 1) % songs.length;
    setCurrentSong(newIndex);
    audioRef.current.src = songs[newIndex].url;
    if (isPlaying) audioRef.current.play();
  };

  const handleSongEnd = () => {
    nextSong();
  };

  return (
    <motion.div
      className="container-botonera2"
      drag="x"
      dragConstraints={{ left: -380, right: 110 }}
      style={{
        position: "fixed",
        top: -6,
        left: "50%",
        height: "90px",
        transform: "translateX(-50%)",
        width: "300px",
        display: showMusicPlayer ? "block" : "none",
        justifyContent: "space-around",
        padding: "10px 0",
        zIndex: 1000,
        backgroundColor: "black",
        border: "1px solid #3232ff",
        textAlign: "center",
        borderRadius: "10px"
      }}
    >
      <audio ref={audioRef} src={songs[currentSong].url} onEnded={handleSongEnd} />
      <div style={{ color: "white", fontSize: "14px", marginBottom: "5px" }}>{songs[currentSong].title}</div>
      <motion.button
        className="boton-botonera"
        style={{ width: "60px" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={isPlaying ? pauseSong : playSong}
      >
        <i className={`fas ${isPlaying ? "fa-pause" : "fa-play"}`} style={{ color: "white" }}></i>
      </motion.button>
      <motion.button
        className="boton-botonera"
        style={{ width: "60px" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={prevSong}
      >
        <i className="fas fa-backward" style={{ color: "white" }}></i>
      </motion.button>
      <motion.button
        className="boton-botonera"
        style={{ width: "60px" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={nextSong}
      >
        <i className="fas fa-forward" style={{ color: "white" }}></i>
      </motion.button>
      <motion.button
        className="boton-botonera text-danger"
        style={{ width: "60px" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowMusicPlayer(false)}
      >
        <i className="fas fa-times" ></i>
      </motion.button>
    </motion.div>
  );
};

export default Music;
