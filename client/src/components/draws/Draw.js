import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cards from '../cards/Cards';
import styles from './assets/draw.module.css';

const Draw = () => {
  const { draws } = useSelector(state => state.draws);
  const { id } = useParams();
  const currentDraw = draws && draws.find(draw => draw.id === parseInt(id));

  const renderDraw = () => {
    if (currentDraw) {
      return (
        <div className={styles.draw}>

          <div className={styles.question}>
            {currentDraw.question}
          </div>

          <div>
            <Cards cards={currentDraw.cards} />
          </div>
          
        </div>
      );
    } else {
      return "Loading...";
    };
  };

  return (
    <div>
      {renderDraw()}
    </div>
  );
};

export default Draw;
