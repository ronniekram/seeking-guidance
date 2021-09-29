import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCards } from '../redux/actions/card';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  });
  
  return (
    <div>
      App Component
    </div>
  );
};

export default App;
