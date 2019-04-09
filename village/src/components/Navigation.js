import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <ul>
      <li>
        <NavLink exact to="/">Smurfs</NavLink>
      </li>
      <li>
        <NavLink to="/smurf-form">Add Smurf</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
