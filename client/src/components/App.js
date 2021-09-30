import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DrawForm from './draws/DrawForm';
import { getCards } from '../redux/actions/card';
import { getDraws } from '../redux/actions/draw';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
    dispatch(getDraws())
  });
  
  return (
    <div>
      App Component
      <DrawForm />
    </div>
  );
};

export default App;
