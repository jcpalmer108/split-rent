import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Select, MenuItem, FormControl, Button } from '@mui/material';
import './Apartment.scss'
import { setBedroom } from '../../features/bedroom/bedroomSlice';

export function Apartment () {
  const bedroom = useSelector(state => state.bedroom)
  const options = [
    { key: 1, value: 'One' },
    { key: 2, value: 'Two' },
    { key: 3, value: 'Three' },
    { key: 4, value: 'Four' },
    { key: 5, value: 'Five' },
  ]
  const dispatch = useDispatch();

  const handleBedroomChange = (event) => {
    dispatch(setBedroom(event.target.value));
  };

  const onSubmit = () => {
    console.log("submit")
  }

  return (
    <div className="apartment">
      <form onSubmit={onSubmit}>
        <FormControl fullWidth>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bedroom}
            variant="standard"
            onChange={handleBedroomChange}
          >
            {
              options.map((item) => {
                return (<MenuItem key={item.key} value={item.key}>{item.value}</MenuItem>)
              })
            }
          </Select>
          <Button type="submit" variant="contained">Contained</Button>
        </FormControl>
      </form>
    </div>
  )
}