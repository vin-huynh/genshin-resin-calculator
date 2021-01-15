import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import Calculator from './Pages/Calculator';
import About from './Pages/About';

function App() {
  return (
    <Router className="App">
      <Navigation />
      <Container>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
