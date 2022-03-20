import React from "react";
import { Button } from "@mui/material";
import "./Apartment.scss";
import RoomDetails from "./components/RoomDetails.js";
import RoommateDetails from "./components/RoommateDetails.js";

export function Apartment() {
  const options = [
    { key: 0, value: "Zero" },
    { key: 1, value: "One" },
    { key: 2, value: "Two" },
    { key: 3, value: "Three" },
    { key: 4, value: "Four" },
    { key: 5, value: "Five" },
  ];

  const onSubmit = () => {
    console.log("submit");
  };

  return (
    <div className="apartment">
      <form onSubmit={onSubmit}>
        <h1>Splitting rent has never been so easy.</h1>
        <p>
          Let's figure out how to split your rent between each of your
          roommates.
        </p>
        <RoomDetails options={options} />
        <RoommateDetails options={options} />
        <Button type="submit" variant="contained">
          Contained
        </Button>
      </form>
    </div>
  );
}
