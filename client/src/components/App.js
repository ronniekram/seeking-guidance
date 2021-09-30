import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Draws from './draws/Draws';
import Draw from './draws/Draw';
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
      <Router>
        <h1>Seeking Guidance</h1>
        <NavLink to="/draws">All Draws</NavLink>
        <Switch>

          <Route exact path="/draws" component={Draws} />

          <Route path="/draws/:id" component={Draw} />

        </Switch>
      </Router>
    </div>
  );
};

export default App;
