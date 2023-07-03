import React, { useState } from "react";
import Spinner from "./Spinner";

const Card = ({ type, title, thumbnail }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleCardClick = () => {
    setIsOverlayOpen(true);
  };

  const handleOverlayClose = () => {
    setIsOverlayOpen(false);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      {isLoading && <Spinner />} {/* Render the spinner if image is loading */}
      <img src={thumbnail} alt={title} onLoad={handleImageLoad} />
      {isOverlayOpen && (
        <Overlay image={thumbnail} onClose={handleOverlayClose} />
      )}
    </div>
  );
};

export default Card;
