import React, { useState } from "react";
import Card from "./Card";
import data from "../db.json";

const Grid = () => {
  const [cards, setCards] = useState(data);

  const handleCardClick = (index) => {
    // Open the overlay for the clicked card
    const updatedCards = [...cards];
    updatedCards[index].isOverlayOpen = true;
    setCards(updatedCards);
  };

  const handleOverlayClose = (index) => {
    // Close the overlay for the corresponding card
    const updatedCards = [...cards];
    updatedCards[index].isOverlayOpen = false;
    setCards(updatedCards);
  };

  const handleDragEnd = (result) => {
    // Reorder the cards after drag and drop
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    const updatedCards = [...cards];

    const [removed] = updatedCards.splice(sourceIndex, 1);
    updatedCards.splice(destinationIndex, 0, removed);

    setCards(updatedCards);
  };

  return (
    <div className="grid">
      {cards.map((card, index) => (
        <Card
          key={card.type}
          index={index}
          card={card}
          onClick={() => handleCardClick(index)}
          onClose={() => handleOverlayClose(index)}
          draggable
        />
      ))}
    </div>
  );
};

export default Grid;
