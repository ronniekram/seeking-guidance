import React from 'react';

const Card = ({ card }) => {
  const { id, name, suit, cardType, summary, image, upright, reversed, desc} = card;

  const showSuit = () => suit ? <h4>Suit: {suit}</h4> : null;

  const renderCard = () => {
    if (card) {
      return (
        <div>
          <h3>{name}</h3>
          <h4>{cardType} Arcana</h4>
          {showSuit()}
        </div>
      )
    } else {
      return "Loading..."
    };
  };

  return (
    <div>
      {renderCard()}
    </div>
  );
};

export default Card;
