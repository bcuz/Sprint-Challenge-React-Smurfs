import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  putSmurf = () => {
    const id = this.props.match.params.id;

    axios
      .put(`http://localhost:3333/smurfs/${id}`, this.state)
      .then(response => {        
        this.props.updateItems(response.data);
        this.props.history.push('/')
      })
      .catch(err => console.log(err));

  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api

    if (this.props.location.pathname.includes('update')) {
      this.putSmurf()
    } else {
      axios
        .post(`http://localhost:3333/smurfs`, this.state)
        .then(response => {         
          this.props.updateItems(response.data);
          this.props.history.push('/')
        })
        .catch(err => console.log(err));
  
      this.setState({
        name: '',
        age: '',
        height: ''
      });
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
