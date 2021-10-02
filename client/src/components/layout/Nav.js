import React, { useRef, useState } from 'react';
import Hamburger from 'react-hamburgers';
import Modal from './Modal';
import styles from '../../assets/styles/layout/nav.module.scss';

const Nav = () => {
  const modal = useRef(null);
  const [isActive, setIsActive] = useState(false);


  const handleClick = () => {
    modal.current.open();
    setIsActive(true);
  };

  return (
    <>
      <div>
        <Hamburger 
          active={isActive}
          type="minus"
          onClick={handleClick}
        />
      </div>

      <Modal ref={modal} setIsActive={setIsActive}>
        hi hello hey hey hey
      </Modal>
    </>
  );
};

export default Nav;
