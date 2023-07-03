import React from "react";
import { Draggable } from "react-beautiful-dnd";

const Card = ({ card, onClick, onClose, draggable }) => {
  const { type, title, position, thumbnail, isOverlayOpen } = card;

  return (
    <Draggable draggableId={type} index={position}>
      {(provided) => (
        <div
          className="card"
          onClick={onClick}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {isOverlayOpen && (
            <div className="overlay" onClick={(e) => e.stopPropagation()}>
              <div className="overlay-content">
                <img src={thumbnail} alt={title} />
                <button className="close-button" onClick={onClose}>
                  Close
                </button>
              </div>
            </div>
          )}
          <img src={thumbnail} alt={title} />
        </div>
      )}
    </Draggable>
  );
};

export default Card;
