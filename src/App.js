import "./App.css";

import { calculateClimb } from "./util";
import Footer from "./components/Footer";

import { Button, TextField, Typography } from "@material-ui/core";

import React, { useState } from "react";

const App = () => {
  const [numWays, setNumWays] = useState(0);
  const [userInput, setUserInput] = useState(0);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleChange = (e) => {
    setNumWays(calculateClimb(e.target.value));
    setUserInput(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="intro">
          <Typography variant="h5">
            You're a rebel scout on the ice planet, Hoth. While killing time
            waiting for the Empire to find your base, you ride your trusty
            Tauntaun around the plant. You wander upon a very tall ice staircase
            leading up a mountainside that takes n steps to reach. Having plenty
            of time on your hands, you decide you want to figure out how many
            ways are there to reach the top. The catch is that for each step,
            your Tauntauan can only climb 1 or 2 steps at a given time.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={() => setButtonClicked(true)}
          >
            ▽ Start ▽
          </Button>
        </div>

        {buttonClicked && (
          <TextField
            id="step-input"
            label="Enter number of steps"
            type="number"
            variant="outlined"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        )}

        <div className="footr">
          <Footer userInput={userInput} numWays={numWays} />
        </div>
      </header>
    </div>
  );
};

export default App;
