import React from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../assets/svg/home.svg';
import archive from '../../assets/svg/archive.svg';
import plus from '../../assets/svg/plus.svg';
import styles from '../../assets/styles/layout/nav.module.scss';

const Nav = () => {

  return (
    <nav className={styles.container}>

      <NavLink to="/" className={styles.link}>
        {/* <img src={home} alt="Home Icon" />  */}
        HOME
      </NavLink>

      <NavLink to="/draws" className={styles.link} activeClassName={styles.link}>
        {/* <img src={archive} alt="Archive Icon" />  */}
        PAST
      </NavLink>

      <NavLink to="/draws/new" className={styles.link}>
        {/* <img src={plus} alt="Add Icon" />  */}
        FUTURE
      </NavLink>

      <NavLink to="/card" className={styles.link}>
        {/* <img src={plus} alt="Add Icon" />  */}
        ONECARD
      </NavLink>

    </nav>
  );
};

export default Nav;
