import React, { useState, useEffect } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { useSelector } from "react-redux";

export default function AreaChoiceField(props) {
  const bedroomDetails = useSelector((state) => state.bedroom.details);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    props.handleChange(length * width, props.item.key, "squarefootage")
  }, [length, width])

  if(props.areaChoice === 'length-width') {

    return (
      <>
        <TextField
          value={length}
          type="number"
          onChange={(event) => {
            setLength(event.target.value);
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
          }}
          variant="standard"
          InputProps={{
            endAdornment: <InputAdornment position="end">ft</InputAdornment>,
          }}
        />
        {' '}wide, or { bedroomDetails[props.index].squarefootage } square feet.

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