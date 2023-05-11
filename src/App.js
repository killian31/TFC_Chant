import React from 'react';
import './App.css'; // assuming you created this file in the src folder
import SearchBar from './SearchBar';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Popup from "./Popup";

const videoList = [
  {
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    lyrics: "Lyrics of the first video"
  },
  {
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    lyrics: "Lyrics of the second video"
  },
  {
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    lyrics: "Lyrics of the third video"
  }
];

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [lyrics, setLyrics] = useState("");
  const handleRandomVideo = () => {
    const randomIndex = Math.floor(Math.random() * videoList.length);
    const randomVideo = videoList[randomIndex];
    setVideoUrl(randomVideo.videoUrl);
    setLyrics(randomVideo.lyrics);
    setShowPopup(true);
  };
  return (
    <div className="App" >
        <div className="container">
              <div className="search-bar">
                <input type="text" placeholder="Rechercher un chant..." />
                <button><FontAwesomeIcon icon={faSearch} /></button>
                <button onClick={handleRandomVideo}>Découvrir un chant aléatoire</button>
              </div>
        </div>
      {showPopup && <Popup videoUrl={videoUrl} lyrics={lyrics} />}
    </div>
  );
}

export default App;

