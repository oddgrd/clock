import React from "react";
import Timer from "./Timer";
function SessionView({
  setSessionLength,
  sessionLength,
  timerType,
  timerState,
  toggleTimerState,
  setBreakLength,
}) {
  return (
    <div className="session-view">
      <h2 id="timer-label">{timerType}</h2>
      <Timer
        sessionLength={sessionLength}
        timerState={timerState}
        setSessionLength={setSessionLength}
        timerType={timerType}
        setBreakLength={setBreakLength}
        toggleTimerState={toggleTimerState}
      />
    </div>
  );
}

export default SessionView;
