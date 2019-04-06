import React from 'react';
import axios from 'axios';

const Smurf = props => {

  const deleteSmurf = () => {
    axios
      .delete(`http://localhost:3333/smurfs/${props.id}`)
      .then(response => {
        props.updateItems(response.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
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

