//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  function handleToGoChange(e) {
    Number.isInteger(parseInt(e.target.value))
      ? setToGo(e.target.value)
      : setToGo(0);
  }

  function handleBallOnChange(e) {
    Number.isInteger(parseInt(e.target.value))
      ? setBallOn(e.target.value)
      : setBallOn(0);
  }

  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(0);
  const [ballOn, setBallOn] = useState(0);

  const inputStyle = {
    fontSize: "16px",
    padding: "5px 10px"
  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} down={down} toGo={toGo} ballOn={ballOn} />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          <button
            className="homeButtons__touchdown"
            onClick={() => setHomeScore(homeScore + 7)}
          >
            Home Touchdown
          </button>
          <button
            className="homeButtons__fieldGoal"
            onClick={() => setHomeScore(homeScore + 3)}
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            className="awayButtons__touchdown"
            onClick={() => setAwayScore(awayScore + 7)}
          >
            Away Touchdown
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setAwayScore(awayScore + 3)}
          >
            Away Field Goal
          </button>
        </div>
        {/*  onClick={() => setQuarter(quarter + 1)} */}
        <div className="homeButtons">
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setQuarter(quarter < 4 ? quarter + 1 : 1)}
          >
            Next Quarter
          </button>
          <button
            className="awayButtons__fieldGoal"
            onClick={() => setDown(down < 4 ? down + 1 : 1)}
          >
            Next Down
          </button>
        </div>
        <div className="awayButtons">
          <input
            className="awayButtons__fieldGoal"
            placeholder="Set Yards To Go"
            type="number"
            onChange={handleToGoChange}
            style={inputStyle}
          ></input>
          <input
            className="awayButtons__fieldGoal"
            placeholder="Set Ball Placement"
            type="number"
            onChange={handleBallOnChange}
            style={inputStyle}
          ></input>
        </div>
      </section>
    </div>
  );
}

export default App;
