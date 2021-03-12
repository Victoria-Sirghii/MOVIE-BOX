import React from 'react';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';


function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route>
          <div>Not found</div>
        </Route>
    </Switch>
    </div>

  );
}

export default App;
