import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/pages/Home';


const App = () => {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
    </Router>
    
    </>
  )
}

export default App
