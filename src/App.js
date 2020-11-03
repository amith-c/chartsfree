import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

import Home from './comp/Home';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
