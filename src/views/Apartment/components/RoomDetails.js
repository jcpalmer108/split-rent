import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, MenuItem } from "@mui/material";
import { setBedroom } from "../../../store/bedroomSlice";
import { setBathroom } from "../../../store/bathroomSlice";

export default function Apartment(props) {
  const dispatch = useDispatch();
  const bedroom = useSelector((state) => state.bedroom.count);
  const bathroom = useSelector((state) => state.bathroom);

  const handleBedroomChange = (event) => {
    dispatch(setBedroom(event.target.value));
  };

  const handleBathroomChange = (event) => {
    dispatch(setBathroom(event.target.value));
  };

  return (
    <div>
      I am renting a place with{" "}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={bedroom}
        variant="standard"
        onChange={handleBedroomChange}
      >
        {props.options.map((item) => {
          return (
            <MenuItem key={item.key} value={item.key}>
              {item.value}
            </MenuItem>
          );
        })}
      </Select>{" "}
      bedrooms, and{" "}
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={bathroom}
        variant="standard"
        onChange={handleBathroomChange}
      >
        {props.options.map((item) => {
          return (
            <MenuItem key={item.key} value={item.key}>
              {item.value}
            </MenuItem>
          );
        })}
      </Select>{" "}
      bathrooms.
    </div>
  );
}
