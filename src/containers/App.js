import React from 'react';
import { Switch, Route } from 'react-router-dom'; // withRouter
import Header from './../components/Header';
import Home from './Home';
import Me from './Me';
import About from './About';

const App = () => (
  <div className="App">
     <Header />
     <Switch>
       <Route exact path='/' component={Home} />
       <Route path='/me' component={Me}/>
       <Route path='/about/:id' component={About}/>
     </Switch>
  </div>
);

export default App;

