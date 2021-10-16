import React, { useState } from 'react';
// Pkg imports
import { useSpring, animated } from 'react-spring';
import { CSSTransition} from 'react-transition-group';

// Component imports
import Card from './Card';

// Style imports
import fadeTransition from '../../assets/styles/cards/fade.module.scss';
import styles from '../../assets/styles/cards/cards.module.scss';

const calcXY = (x, y) => [
  -(y - window.innerHeight / 2) / 15,
  (x - window.innerWidth / 2) / 15,
  1.0,
];

const perspective = (x, y, s) =>
  `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  // Writing in a comment to see if fuckin' git commits are working.
const Cards = ({ cards }) => {
  const [card, setCard] = useState(cards[0]);
  const [inProp, setInProp] = useState(false);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 200, friction: 100 },
  }));

  const handleClick = (card) => {
    setCard(card)
    setInProp(true);
  };


  const renderCards = () => {
    if (cards) {
      return cards.map(card => {
        return (
          <animated.div 
            className={styles.card}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calcXY(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(perspective) }}
          >
            <img 
              src={card.image} 
              onClick={() => {handleClick(card)} } 
              alt={card.name} 
            />
          </animated.div>
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
