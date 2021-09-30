import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Cards from '../cards/Cards';

const Draw = () => {
  const { draws } = useSelector(state => state.draws);
  const { id } = useParams();
  const currentDraw = draws && draws.find(draw => draw.id === parseInt(id));

  const renderDraw = () => {
    if (currentDraw) {
      return (
        <div>
          {/* <h1>{currentDraw.question}</h1>
          <h3>{currentDraw.created_date}</h3> */}
          <div>
            <Cards cards={currentDraw.cards} />
          </div>
        </div>
      );
    } else {
      return "Loading...";
    };
  };

  return (
    <div>
      {renderDraw()}
    </div>
  );
};

export default Draw;
