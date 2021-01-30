import React from "react";
import Timer from "./Timer";
function SessionView({
  sessionLength,
  timerType,
  timer,
  setTimer,
  timerState,
}) {
  return (
    <div className="session-view">
      <h2 id="timer-label">{timerType}</h2>
      <h1 id="time-left">
        <Timer
          sessionLength={sessionLength}
          timer={timer}
          setTimer={setTimer}
          timerState={timerState}
        />
      </h1>
    </div>
  );
}

export default SessionView;
