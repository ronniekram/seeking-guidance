import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './layout/Nav';
import Draws from './draws/Draws';
import Draw from './draws/Draw';
import DrawForm from './draws/DrawForm';

import { getCards } from '../redux/actions/card';
import { getDraws } from '../redux/actions/draw';

import styles from '../assets/styles/app.module.css';

const App = () => {
  const dispatch = useDispatch();
  const modal = useRef(null);

  useEffect(() => {
    dispatch(getCards());
    dispatch(getDraws())
  });
  
  return (
    <>
      <div className={styles.app}>
        <Router>

          <div className={styles.burger}>
            <button onClick={() => modal.current.open()}>menu</button>
          </div>

          <Switch>
            <Route exact path="/" component={DrawForm} />
            <Route exact path="/draws" component={Draws} />
            <Route path="/draws/:id" component={Draw} />
          </Switch>
        </Router>

        <div className={styles.title}>
          <h1>Seeking Guidance</h1>
        </div>
      </div>
    </>
  );
};

export default App;
