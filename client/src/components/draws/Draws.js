import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Draws = () => {
  const {draws} = useSelector(state => state.draws);

  const renderDraws = () => {
    return (
      draws.map((draw) => {
        return (
          <p key={draw.id}>
            <NavLink to={`/draws/${draw.id}`}>{draw.question} {draw.created_date}</NavLink>
          </p>
        );
      })
    );
  };

  const renderLoading = () => {
    if (!draws) {
      return null;
    } else {
      renderDraws();
    };
  };

  return (
    <>
      {/* <div>
        <h1>Draws List</h1>
        <div>
          {renderDraws()}
        </div>
      </div> */}

      <div>
        {/* <DrawForm /> */}
      </div>
    </>
  );
};

export default Draws;
