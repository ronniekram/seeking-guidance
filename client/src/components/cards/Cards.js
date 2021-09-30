import React, { useState } from 'react';
import Card from './Card';
import styles from './assets/cards.module.css';

const Cards = ({ cards }) => {
  const [card, setCard] = useState(null);

  const renderCards = () => {
    if (cards) {
      return cards.map(card => {
        return (
          <div className={styles.card}>
            <img 
              src={card.image} 
              onClick={() => {setCard(card)} } 
              alt={card.name} 
            />
          </div>
        )
      })
    }
  };

  return (
    <article className={styles.container}>
      <section className={styles.cardInfo}>
        <Card card={card} />
      </section>

      <section className={styles.cards}>
        {renderCards()}
      </section>
    </article>
  )
};

export default Cards;
