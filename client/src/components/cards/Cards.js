import React from 'react';
import Card from './Card';

const Cards = ({ cards }) => {

  const renderCards = () => {
    if (cards) {
      return cards.map((card) => {
        return <Card card={card} key={card.id} />;
      });
    } else {
      return "Loading...";
    };
  };

  return <div>{renderCards()}</div>;
};

export default Cards;
