import React from 'react';
import sword from '../../assets/svgs/sword.svg';
import styles from './assets/card.module.css';

const Card = ({ card }) => {
  
  const renderCard = () => {
    if (card) {
      const { name, cardType, summary, upright, reversed} = card;
      return (
        <div className={styles.container}>
          <div className={styles.header}>
            {/* Header */}
            <h1>{name}</h1>
            <h2>{cardType} Arcana</h2>
          </div>

          <div className={styles.text}>
            <div className={styles.summary}>
              {/* Card Summary */}
              <p>{summary}</p>
            </div>

            <div className={styles.sheath}>
              {/* Sword Image */}
              <img src={sword} alt="It's a sword." className={styles.sword} />
            </div>

            <div className={styles.directions}>
              {/* Directions */}
              <div>
                <h4>Upright:</h4>
                <p>{upright}</p>
              </div>

              <div>
                <h4>Reversed:</h4>
                <p>{reversed}</p>
              </div>

            </div>
          </div>

        </div>
      )
    } else {
      return null;
    };
  };

  return (
    <section>
      {renderCard()}
    </section>
  );
};

export default Card;
