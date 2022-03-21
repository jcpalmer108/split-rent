import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";

export default function AreaChoiceField(props) {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);

  const calculateSquarefootage = (l, w) => {
    return l * w;
  };

  if(props.areaChoice === 'length-width') {

    return (
      <>
        <TextField
          value={length}
          type="number"
          onChange={(event) => {
            setLength(event.target.value);
            props.handleChange(calculateSquarefootage(length, width), props.item.key, "squarefootage")
          }}
          variant="standard"
          InputProps={{
            endAdornment: <InputAdornment position="end">ft</InputAdornment>,
          }}
        />
        {' '}long and{' '}
        <TextField
          value={width}
          type="number"
          onChange={(event) => {
            setWidth(event.target.value);
            props.handleChange(calculateSquarefootage(length, width), props.item.key, "squarefootage")
          }}
          variant="standard"
          InputProps={{
            endAdornment: <InputAdornment position="end">ft</InputAdornment>,
          }}
        />
        {' '}wide, or { calculateSquarefootage(length, width) } square feet.

      </>
    )
  } else {
    return (
      <>squarefootage</>
    )
  }
}

/*

  { props.areaChoice === 'length-width' ? (
    
    <>
      <TextField
        value={length}
        type="number"
        variant="standard"
        InputProps={{
          endAdornment: <InputAdornment position="end">ft</InputAdornment>,
        }}
      />
    </>
  ) : (
    <>square footages</>
  )}

*/