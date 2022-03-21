import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TextField, InputAdornment } from "@mui/material";
import { updateDetail } from "../../store/bedroomSlice";
import AreaChoiceField from "./components/AreaChoiceField.js";


export default function Bedroom(props) {
  const bedroom = useSelector((state) => state.bedroom.details);
  const dispatch = useDispatch();

  console.log(bedroom)

  const handleLabelChange = (event, key, attribute) => {
    dispatch(updateDetail({ payload: event.target.value, key: key, attribute: attribute }));
  };

  return (
    <div>
      <h2>Let's talk about the rooms...</h2>
      {
        bedroom.map((item, index) => {
          return (<div key={index}>
            <TextField variant="standard" value={item.label} onChange={(e) => handleLabelChange(e, item.key, "label")} />
            {' '}is{' '}
            <AreaChoiceField />
          </div>)
        })
      }
      {/* <div>Bedroom A is X length and X width. It DOES/DOES NOT have an attached bathroom.  */}
    </div>
    )
}