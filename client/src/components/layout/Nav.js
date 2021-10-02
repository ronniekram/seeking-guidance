import React, { useRef } from 'react';
import NavModal from './NavModal';

const Nav = () => {
  const modal = useRef(null);

  return (
    <>
      <div>
        <button onClick={() => modal.current.open()}>menu</button>
      </div>

      <NavModal ref={modal}>
        hi hello
      </NavModal>
    </>
  );
}

export default Nav;
