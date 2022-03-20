import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, MenuItem, TextField, Button, InputAdornment } from '@mui/material';
import './Apartment.scss'
import RoomDetails from './components/RoomDetails.js';
import RoommateDetails from './components/RoommateDetails.js'


import { CSSTransition } from 'react-transition-group' // ES6

export function Apartment () {
  const dispatch = useDispatch();
  const options = [
    { key: 0, value: 'Zero' },
    { key: 1, value: 'One' },
    { key: 2, value: 'Two' },
    { key: 3, value: 'Three' },
    { key: 4, value: 'Four' },
    { key: 5, value: 'Five' },
  ]

  const onSubmit = () => {
    console.log("submit")
  }

  return (
    <div className="apartment">
      <form onSubmit={onSubmit}>
        <h1>Splitting rent has never been so easy.</h1>
        <p>Let's figure out how to split your rent between each of your roommates.</p>
          <RoomDetails options={options} />
          <RoommateDetails options={options} />
          <Button type="submit" variant="contained">Contained</Button>
      </form>
    </div>
  )
}

/*

*/