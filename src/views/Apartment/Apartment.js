import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import "./Apartment.scss";
import RoomDetails from "./components/RoomDetails.js";
import RoommateDetails from "./components/RoommateDetails.js";

export function Apartment() {
  const rent = useSelector((state) => state.rent);
  const roommate = useSelector((state) => state.roommate);
  const bedroom = useSelector((state) => state.bedroom);
  const bathroom = useSelector((state) => state.bathroom);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    evaluateShowContinue();
  }, [rent, roommate, bedroom, bathroom])

  function evaluateShowContinue () {
    console.log(rent, roommate, bedroom, bathroom)
    if(rent > 0 && roommate > 0 && bedroom > 0 && bathroom > 0) {
      setShowContinue(true)
    } else {
      setShowContinue(false)
    }
  }

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
        <h1>Tell me about your space</h1>
        <RoomDetails options={options} />
        <RoommateDetails options={options} />
        <Button disabled={!showContinue} type="submit" variant="contained">
          Continue
        </Button>
      </form>
    </div>
  );
}
