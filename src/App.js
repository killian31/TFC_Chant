import React from 'react';
import './App.css'; // assuming you created this file in the src folder
import SearchBar from './SearchBar';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Popup.css'

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
                <Popup trigger={<button> Découvrir un chant aléatoire</button>} position="right center" modal>
                  {close => (
                  <div className="modal">
                    <button className="close" onClick={close}>
                      &times;
                    </button>
                    <div className="header"> EN DÉVELOPPEMENT, en attendant voici Bafo qui chante très mal : </div>
                    <div className="content">
                      <div style={{display: "inline-block"}}>
                          <iframe 
                              width="238" 
                              height="423" 
                              src="https://www.youtube.com/embed/KvjSv4e5JE8"
                              title="Nous nous sommes le TFC mal chanté par Bafo"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen>
                          </iframe>
                      </div>
                      <div style={{display: "inline-block", position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%)'}}>
                          <p>&#xAB; Nous nous sommes le TFC</p>
                          <p>Toulouse est notre fierté</p>
                          <p>Et ce soir on gagnera</p>
                          <p>Et pour vous on chantera</p>
                          <p>Allez allez TFC</p>
                          <p>Tous ensemble il faut chanter</p>
                          <p>Allez Toulouuuuuseeee allez Toulouuuuuseeee, allez le TFC (x2) &#xBB;</p>
                      </div>
                    </div>
                    <div className="actions">
                      <button
                        className="button"
                        onClick={() => {
                          console.log('Pop-up fermée');
                          close();
                        }}
                      >
                        Fermer la fenêtre Pop-up
                      </button>
                    </div>
                  </div>
                )}
                </Popup>
              </div>
        </div>
    </div>
  );
}

export default App;

