import React, { useState, useEffect } from "react";
import { Button, Collapse } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import "./Apartment.scss";
import RoomDetails from "./components/RoomDetails.js";
import RoommateDetails from "./components/RoommateDetails.js";
import SpaceDetails from "./components/SpaceDetails.js";
import { setCurrentView } from "../../store/viewSlice.js";
import { generateDefaultBedroomDetails } from "../../store/bedroomSlice";


export default function Apartment(props) {
  const rent = useSelector((state) => state.rent);
  const roommate = useSelector((state) => state.roommate);
  const bedroom = useSelector((state) => state.bedroom.count);
  const bathroom = useSelector((state) => state.bathroom);
  const view = useSelector((state) => state.view);
  const [disableContinue, setDisableContinue] = useState(true);
  const [showRoommateDetails, setShowRoommateDetails] = useState(false);
  const [showSpaceDetails, setShowSpaceDetails] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    evaluateShowContinue();
  }, [rent, roommate, bedroom, bathroom])

  function evaluateShowContinue () {
    if(rent > 0 && roommate > 0 && bedroom > 0 && bathroom > 0) {
      setDisableContinue(false)
    } else {
      setDisableContinue(true)
    }
  }

  useEffect(() => {
    if(bedroom > 0 && bathroom > 0) setShowRoommateDetails(true);
  }, [bedroom, bathroom])

  useEffect(() => {
    if(rent > 0 && roommate > 0) setShowSpaceDetails(true);
  }, [rent, roommate])

  const options = [
    { key: 0, value: "Zero" },
    { key: 1, value: "One" },
    { key: 2, value: "Two" },
    { key: 3, value: "Three" },
    { key: 4, value: "Four" },
    { key: 5, value: "Five" },
  ];

  const onSubmit = () => {
    dispatch(setCurrentView(view.options[1]))
    dispatch(generateDefaultBedroomDetails())
    console.log(bedroom)
  };

  return (
    <div className="apartment">
      <h2>Tell me about your space</h2>
      <div className="line">
        <RoomDetails options={options} />
      </div>
      <div className="line">
        <Collapse in={showRoommateDetails}>
          <RoommateDetails className="line" options={options} />
        </Collapse>
      </div>
      <div>
        <Collapse in={showSpaceDetails}>
          <SpaceDetails className="line" areaChoice={props.areaChoice} onChange={props.handleAreaChoice} />
          <Button className="line" disabled={disableContinue} onClick={onSubmit} variant="contained">
            Continue
          </Button>
        </Collapse>
        </div>
    </div>
  );
}
