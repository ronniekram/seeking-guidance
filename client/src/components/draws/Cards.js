import React from 'react';
import styles from '../../assets/styles/draws/cards.module.scss';

const Cards = ({ cards, question }) => {

  return (
    <div className={styles.container}>
      {cards.map (card => (
        <img src={card.image} alt={card.name} />
      ))}
    </div>
  );
}

export default Cards;
