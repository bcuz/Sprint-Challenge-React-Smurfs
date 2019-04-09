import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => this.setState({smurfs: response.data}))
    .catch(err => console.log(err));
  }

  updateItems = newSmurfs => {
    this.setState({ smurfs: newSmurfs });
  };
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation />          
          <Route exact path="/" render={props => <Smurfs {...props} smurfs={this.state.smurfs} updateItems={this.updateItems} /> } />          
          <Route path="/smurf-form" render={props => <SmurfForm {...props} updateItems={this.updateItems} /> } />          
          <Route path="/update/:id" render={props => <SmurfForm {...props} updateItems={this.updateItems} /> } />          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
