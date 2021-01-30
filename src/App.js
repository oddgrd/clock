import { React, useState } from "react";
import "./App.css";
import DurationIncrementers from "./components/DurationIncrementers";
import SessionView from "./components/SessionView";
import MediaControls from "./components/MediaControls";
import Heading from "./components/Heading";
function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timerState, toggleTimerState] = useState(false);
  const [timerType, setTimerType] = useState("Session");
  const [timer, setTimer] = useState("");
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
        <SessionView
          sessionLength={sessionLength}
          timerType={timerType}
          timer={timer}
          setTimer={setTimer}
          timerState={timerState}
        />
        <MediaControls
          setBreakLength={setBreakLength}
          setSessionLength={setSessionLength}
          timerState={timerState}
          toggleTimerState={toggleTimerState}
          setTimer={setTimer}
        />
      </div>
    </div>
  );
}

export default App;
