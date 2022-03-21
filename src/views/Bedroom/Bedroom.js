import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TextField } from "@mui/material";
import { updateDetail } from "../../store/bedroomSlice";


export default function Bedroom(props) {
  const bedroom = useSelector((state) => state.bedroom.details);
  const dispatch = useDispatch();

  console.log(bedroom)

  const handleLabelChange = (event, key, attribute) => {
    console.log('event: ', event);
    console.log('key:', key);
    dispatch(updateDetail({ payload: event.target.value, key: key, attribute: attribute }));
  };


  return (
    <div>
      <h2>Let's talk about the rooms...</h2>
      {
        bedroom.map((item, index) => {
          return (<div key={index}>
            <TextField variant="standard" value={item.label} onChange={(e) => handleLabelChange(e, item.key, "label")} />
          </div>)
        })
      }
      {/* <div>Bedroom A is X length and X width. It DOES/DOES NOT have an attached bathroom. It'll be shared by X people.</div> */}
    </div>
    )
}