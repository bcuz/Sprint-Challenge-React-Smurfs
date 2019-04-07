import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Smurf = props => {
  let { id, name, height, age, updateItems } = props

  const deleteSmurf = () => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        updateItems(response.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="Smurf">
      <h3>{name}</h3>
      <strong>{height} tall</strong>
      <p>{age} smurf years old</p>
      <Link to={`/update/${id}`}>Update</Link>
      <button onClick={deleteSmurf}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

