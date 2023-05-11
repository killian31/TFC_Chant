import React from "react";

const Popup = ({ videoUrl, lyrics }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <iframe
          title="video-player"
          width="560"
          height="315"
          src={videoUrl}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <div className="lyrics">{lyrics}</div>
      </div>
    </div>
  );
};

export default Popup;

