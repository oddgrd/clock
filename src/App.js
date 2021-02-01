import { React, useState } from "react";
import "./App.css";
import DurationIncrementers from "./components/DurationIncrementers";
import Timer from "./components/Timer";
import Heading from "./components/Heading";
function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerState, toggleTimerState] = useState(false);
  const [timerType, setTimerType] = useState("Session");

  const durationIncrementers = ["break", "session"];
  return (
    <div className="App">
      <Heading text="25+5Clock" arc={120} radius={350} />
      <div className="grid-container">
        {durationIncrementers.map((type, index) => {
          return (
            <DurationIncrementers
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
