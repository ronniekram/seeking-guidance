import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import styles from '../../assets/styles/cards/single.module.scss';

const Single = () => {
  const { cards } = useSelector(state => state.cards);
  const randomId = Math.floor(Math.random() * 78);
  const card = cards[randomId];

  const renderCard = () => {
    if (card) {
      return (
        <article className={styles.container}>
            <section className={styles.text}>
              <Card card={card} />
            </section>
      
            <section>
              <img src={card.image} alt={card.name} className={styles.card} />
            </section>
        </article>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {renderCard()}
    </>
  );
};

export default Single;
