import React from 'react';
import { NavLink } from 'react-router-dom';
import home from '../../assets/svg/home.svg';
import archive from '../../assets/svg/archive.svg';
import plus from '../../assets/svg/plus.svg';
import styles from '../../assets/styles/layout/nav.module.scss';

const Nav = () => {

  return (
    <nav className={styles.container}>

      <NavLink to="/">
        <img src={home} alt="Home Icon" />
      </NavLink>

      <NavLink to="/draws">
        <img src={archive} alt="Archive Icon" />
      </NavLink>

      <NavLink to="/draws/new">
        <img src={plus} alt="Add Icon" />
      </NavLink>

    </nav>
  );
};

export default Nav;
