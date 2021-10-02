import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import NavModal from './NavModal';
import './assets/hamburgers.css';

const Nav = () => {
  const modal = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const burgerClasses = isActive ? "hamburger hamburger--minus is-active" : "hamburger hamburger--minus";

  const handleClick = () => {
    modal.current.open();
    setIsActive(true);
  };

  return (
    <>
      <div>
      <button className={burgerClasses} type="button" onClick={handleClick}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span> 
      </button>

      <NavLink to="/">
        <FontAwesomeIcon icon={faPlus} />
      </NavLink>
      </div>

      <NavModal ref={modal} setIsActive={setIsActive}>

      </NavModal>
    </>
  );
}

export default Nav;
