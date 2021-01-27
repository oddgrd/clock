import { React, useState } from "react";
import "./App.css";
import DurationIncrementers from "./components/DurationIncrementers";
import SessionView from "./components/SessionView";
function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const durationIncrementers = ["break", "session"];
  return (
    <div className="App">
      <h1 className="title">25 + 5 Clock</h1>
      {durationIncrementers.map((type, index) => {
        return (
          <DurationIncrementers
            key={index}
            type={type}
            breakLength={breakLength}
            setBreakLength={setBreakLength}
            sessionLength={sessionLength}
            setSessionLength={setSessionLength}
          />
        );
      })}
      <SessionView sessionLength={sessionLength} />
    </div>
  );
}

export default App;
