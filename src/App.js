import React from 'react';
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path="/">
        asasasa
      </Route>
      <Route exact path="/starred">
        asasasadfdfdfd
      </Route>
      <Route>
        this is 404 page
      </Route>
    </Switch>
  );
}

export default App;
