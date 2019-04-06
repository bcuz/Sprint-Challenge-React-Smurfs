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

  updateSmurf = () => {
    const id = this.props.match.params.id;

    axios
      .put(`http://localhost:3333/smurfs/${id}`, this.state)
      .then(response => {        
        this.props.updateItems(response.data);
        this.props.history.push('/')
      })
      .catch(err => console.log(err));

  }
  
  addSmurf = () => {
    // add code to create the smurf using the api

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
    
  handleSubmit = event => {
    event.preventDefault();
    if (this.props.location.pathname.includes('update')) {
      this.updateSmurf()
    } else {
      this.addSmurf()
    }
  }


  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let updatePath = this.props.location.pathname.includes('update')

    return (
      <div className="SmurfForm">
      {
        updatePath ? 
        <h3>Updating Smurf #{this.props.match.params.id}</h3> : 
        null
        }
        <form onSubmit={this.handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
