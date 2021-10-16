export const calcXY = (x, y) => [
  -(y - window.innerHeight / 2) / 15,
  (x - window.innerWidth / 2) / 15,
  1.0,
];

export const perspective = (x, y, s) =>
  `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;