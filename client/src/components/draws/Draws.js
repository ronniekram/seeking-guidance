import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from '../../assets/styles/draws/draws.module.scss';

const Draws = () => {
  const {draws} = useSelector(state => state.draws);
  
  const renderDrawLinks = () =>
    draws.map((draw) => (
      <li key={draw.id}>
        <NavLink to={`/draws/${draw.id}`}>
          {draw.question}
        </NavLink>
      </li>
    ));

  return (
    <article className={styles.container}>
      <div>
        {renderDrawLinks()}
      </div>
    </article>
  );
}

export default Draws;
