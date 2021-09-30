import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Draw = () => {
  const { draws } = useSelector(state => state.draws);
  const { id } = useParams();
  const currentDraw = draws && draws.find(draw => draw.id === parseInt(id));
  // const id = parseInt(params.id)
  console.log(currentDraw)

  return (
    <div>
      <h1>{currentDraw.question}</h1>
      <h3>{currentDraw.created_date}</h3>
    </div>
  );
};

export default Draw;
