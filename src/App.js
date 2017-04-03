import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar, Jumbotron, Button, Grid} from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar inverse fixedTop>
         <Grid>
        <Navbar.Header>
          <Navbar.Brand>
          <a href="/">Expenses App </a>
          </Navbar.Brand>
          <Navbar.Toggle/>
          </Navbar.Header>
          </Grid>
       </Navbar>
       <Jumbotron>
         <Grid>
          <h2>Welcome to React</h2>
        <p className="App-intro">
        <Button
            bsStyle="success"
            bsSize="large"
            href="http://react-bootstrap.github.io/components.html"
            target="_blank">
            View React Bootstrap Docs
          </Button>
        </p>
        </Grid>
      </Jumbotron>
      </div>
    );
  }
}

export default App;
