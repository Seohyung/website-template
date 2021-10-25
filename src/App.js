import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';
import { Home, About, Events, Products, Contact } from './pages';

const App = () => (
  <div>
    <Switch>
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/events'>
        <Events />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </Switch>
  </div>
);

export default App;
