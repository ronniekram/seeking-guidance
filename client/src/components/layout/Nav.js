import React, { useState } from 'react';
import Burger from 'react-css-burger';

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Burger
        onClick={() => setActive(!active)}
        active={active}
        burger="minus"
        color="#D93208"
        scale={.75}
      />
    </div>
  );
};

export default Nav;
