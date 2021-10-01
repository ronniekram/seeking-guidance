import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Card from './Card';
import styles from './assets/cards.module.css';
import './assets/transition.css';

const Cards = ({ cards }) => {
  const [card, setCard] = useState(cards[0]);
  const [inProp, setInProp] = useState(false);

  const handleClick = (card) => {
    setCard(card)
    setInProp(true);
  };


  const renderCards = () => {
    if (cards) {
      return cards.map(card => {
        return (
          <div className={styles.card}>
            <img 
              src={card.image} 
              onClick={() => {handleClick(card)} } 
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
        {/* <TransitionGroup> */}
          <CSSTransition in={inProp} timeout={200} classNames="card-transition">
            <Card card={card} setInProp={setInProp} />
          </CSSTransition>
        {/* </TransitionGroup> */}
      </section>

      <section className={styles.cards}>
        {renderCards()}
      </section>
    </article>
  )
};

export default Cards;
