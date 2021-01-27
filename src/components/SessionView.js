import React from "react";

function SessionView({ sessionLength }) {
  return (
    <div className="session-view">
      <h2 id="timer-label">Session</h2>
      <h1 id="time-left">{sessionLength.toFixed(2)}</h1>
    </div>
  );
}

export default SessionView;
