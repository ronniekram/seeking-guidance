import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DrawForm from './DrawForm';

const Draws = () => {
  const {draws} = useSelector(state => state.draws);

  const renderDraws = () => {
    return (
      draws &&
      draws.map((draw) => {
        return (
          <p key={draw.id}>
            {draw.question} {draw.created_date}
          </p>
        );
      })
    );
  };

  return (
    <>
      <div>
        <h1>Draws List</h1>
        <div>
          {renderDraws()}
        </div>
      </div>

      <div>
        <DrawForm />
      </div>
    </>
  );
};

export default Draws;
