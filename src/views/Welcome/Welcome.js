import React, { useState } from "react";
import { Button } from "@mui/material";

export function Welcome() {
  return (
    <div>
      <h1>SplitRent</h1>
      <p>
        Interested in figuring out how much you and your roommates should pay
        for rent, based on room square footage? Use this helpful app to
        calculate how much you each owe in rent.
      </p>
      <Button>Hi</Button>
    </div>
  );
}
