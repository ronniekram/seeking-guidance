import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import DrawForm from './DrawForm';
import Spinner from '../layout/Spinner';

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
      return <Spinner />;
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
        <DrawForm />
      </div>
    </>
  );
};

export default Draws;
