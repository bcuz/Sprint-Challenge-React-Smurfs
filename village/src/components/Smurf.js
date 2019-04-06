import React from 'react';
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
      <button onClick={deleteSmurf}>delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

