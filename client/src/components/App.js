import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DrawForm from './draws/DrawForm';
import { getCards } from '../redux/actions/card';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  });
  
  return (
    <div>
      App Component
      <DrawForm />
    </div>
  );
};

export default App;
