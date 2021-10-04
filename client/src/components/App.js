import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './layout/Nav';
import Landing from './layout/Landing';
import Draws from './draws/Draws';
import Draw from './draws/Draw';
import DrawForm from './draws/DrawForm';

import { getCards } from '../redux/actions/card';
import { getDraws } from '../redux/actions/draw';

import styles from '../assets/styles/app.module.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
    dispatch(getDraws())
  });
  
  return (
    <>
      <Router>

        {/* <div className={styles.nav}>
          <Nav />
        </div> */}

        <div className={styles.app}>
          <div className={styles.nav}>
            <Nav />
          </div>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/draws/new" component={DrawForm} />
            <Route exact path="/draws" component={Draws} />
            <Route path="/draws/:id" component={Draw} />
          </Switch>

          <div className={styles.title}>
            <h1>Seeking Guidance</h1>
          </div>

        </div>

      </Router>
    </>
  );
};

export default App;
