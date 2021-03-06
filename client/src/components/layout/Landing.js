import React from 'react';
import { NavLink } from 'react-router-dom';
import starHand from '../../assets/svg/starHand.svg';
import styles from '../../assets/styles/layout/landing.module.scss';

const Landing = () => {
  return (
    <article className={styles.container}>

      <img src={starHand} alt="Hand holding stars..." />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <p className={styles.links}>
        <NavLink to="/draws/new">Illuminate your path...</NavLink>
      </p>

    </article>
  );
}

export default Landing;
