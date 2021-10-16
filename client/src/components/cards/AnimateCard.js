import React, { useState, useRef } from 'react';
import { useSpring, animated } from 'react-spring';

const AnimateCard = ({ children, styles }) => {
  const ref = useRef();

  const [isHovered, setHovered] = useState(false);

  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    // Array containing [rotateX, rotateY, and scale] values.
    // We store under a single key (xys) instead of separate keys ...
    // ... so that we can use animatedProps.xys.interpolate() to ...
    // ... easily generate the css transform value below.
    xys: [0, 0, 1],
    // Setup physics
    config: { mass: 10, tension: 400, friction: 30, precision: 0.00001 }
  }));

  const handleMouseMove = (event) => {
    const x =
      event.clientX -
      (ref.current.offsetLeft -
        (window.scrollX || window.pageXOffset || document.body.scrollLeft));

    // Get mouse y position within card
    const y =
      event.clientY -
      (ref.current.offsetTop -
        (window.scrollY || window.pageYOffset || document.body.scrollTop));

    // Set animated values based on mouse position and card dimensions
    const dampen = 50; // Lower the number the less rotation
    const xys = [
      -(y - ref.current.clientHeight / 2) / dampen, // rotateX
      (x - ref.current.clientWidth / 2) / dampen, // rotateY
      1.07, // Scale
    ];

    // Update values to animate to
    setAnimatedProps({ xys: xys });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    // Set xys back to original
    setAnimatedProps({ xys: [0, 0, 1] });
  };

  const animateStyle = {
    // If hovered we want it to overlap other cards when it scales up
    zIndex: isHovered ? 2 : 1,
    // Interpolate function to handle css changes
    transform: animatedProps.xys.interpolate(
      (x, y, s) =>
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    )
  };

  return (
    <animated.div
      className={styles}
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={animateStyle}
    >
      {children}
    </animated.div>
  );
}

export default AnimateCard;
