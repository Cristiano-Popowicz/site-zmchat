import React, { Component } from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import Cadastro from './Components/Pages/Cadastro';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


class App extends Component {
  render() {
    return(
      <div>
        <Router>
          <>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/Cadastro">
                <Cadastro />                 
              </Route>
            </Switch>      
          </>
        </Router>
      </div>
    );
  }
}

export default App;

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
