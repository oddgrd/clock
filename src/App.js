import { React, useState } from "react";
import "./App.css";
import DurationModifiers from "./components/DurationModifiers";
import Timer from "./components/Timer";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerState, toggleTimerState] = useState(false);
  const [timerType, setTimerType] = useState("Session");

  const durationModifiers = ["break", "session"];
  return (
    <div className="App">
      <h1 className="heading">25 + 5 CLOCK</h1>
      <div className="grid-container">
        {durationModifiers.map((type, index) => {
          return (
            <DurationModifiers
              key={index}
              type={type}
              breakLength={breakLength}
              setBreakLength={setBreakLength}
              sessionLength={sessionLength}
              setSessionLength={setSessionLength}
              timerState={timerState}
            />
          );
        })}
        <Timer
          sessionLength={sessionLength}
          setSessionLength={setSessionLength}
          timerType={timerType}
          setTimerType={setTimerType}
          timerState={timerState}
          breakLength={breakLength}
          setBreakLength={setBreakLength}
          toggleTimerState={toggleTimerState}
        />
      </div>
    </div>
  );
}

export default App;
