import React from 'react';
import sword from '../../assets/svg/sword.svg';
import styles from '../../assets/styles/cards/card.module.scss';

const Card = ({ card }) => {

  // useEffect(() => {
  //   setTimeout(() => {
  //     setInProp(false);
  //   }, 1200)
  // });

  const renderCard = () => {
    if (card) {
      const { name, cardType, summary, upright, reversed} = card;
      return (
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>{name}</h1>
            <h2>{cardType} Arcana</h2>
          </div>

          <div className={styles.text}>
            <div className={styles.summary}>
              <p>{summary}</p>
            </div>


            <div className={styles.directionContainer}>

              <div className={styles.sheath}>
                  <img 
                    src={sword} 
                    alt="It's a sword." 
                    className={styles.sword} 
                  />
                </div>
                
                <div className={styles.directions}>
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
        </div>
      )
    } else {
      return null;
    };
  };

  return (
    <div>
      {renderCard()}
    </div>
  );
};

export default Card;