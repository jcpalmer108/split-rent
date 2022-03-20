import React from 'react';
import { Select, MenuItem } from "@mui/material";

export default function SpaceDetails(props) {
  return (
    <div>
      I currently know the{' '}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.areaChoice}
        variant="standard"
        onChange={(event) => {
          console.log('test', event.target.value)
          props.onChange(event)
        }}
      >
        <MenuItem value="length-width">Length & Width</MenuItem>
        <MenuItem value="squarefoot">Squarefootage</MenuItem>
      </Select>
      {' '}of my new space.
    </div>
  )
}