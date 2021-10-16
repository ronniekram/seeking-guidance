import React, { useState } from 'react';
// Pkg imports
import { useSprings, animated } from 'react-spring';
import { CSSTransition} from 'react-transition-group';

// Component imports
import Card from './Card';

// Helper imports
// import { calcXY, perspective } from '../../helpers';

// Style imports
import fadeTransition from '../../assets/styles/cards/fade.module.scss';
import styles from '../../assets/styles/cards/cards.module.scss';

const Cards = ({ cards }) => {
  const [card, setCard] = useState(cards[0]);
  const [inProp, setInProp] = useState(false);

  // const [props, set] = useSpring(() => ({
  //   xys: [0, 0, 1],
  //   config: { mass: 5, tension: 200, friction: 100 },
  // }));

  // const springs = useSprings(cards.length,
  //   cards.map((item, i) => ({
  //     xys: [0, 0, 1],
  //     config: { mass: 5, tension: 200, friction: 100 },
  //   }))
  // );

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
          <CSSTransition 
            in={inProp} 
            timeout={250} 
            classNames={fadeTransition}
            onEntered={() => setInProp(false)}
          >
            <Card card={card} />
          </CSSTransition>
      </section>

      <section className={styles.cards}>
        {renderCards()}
      </section>
    </article>
  )
};

export default Cards;
