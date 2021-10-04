import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Cards from './Cards';
import styles from '../../assets/styles/draws/draws.module.scss';

const Draws = () => {
  const {draws} = useSelector(state => state.draws);

  const renderDraws = () => {
    return draws.map(draw => (
      <div className={styles.cards}>
        <NavLink to={`/draws/${draw.id}`}>
          <Cards cards={draw.cards} question={draw.question} />
        </NavLink>
      </div>
    ));
  };

  return (
    <article className={styles.container}>
      {renderDraws()}
    </article>
  );
}

export default Draws;
