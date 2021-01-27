import React from "react";

function DurationIncrementers({
  type,
  breakLength,
  setBreakLength,
  setSessionLength,
  sessionLength,
}) {
  const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
  const typeTimer = type === "break" ? breakLength : sessionLength;
  const handleDecrement = () => {
    if (type === "break" && breakLength > 1) {
      setBreakLength((breakLength += -1));
    }
    if (type === "session" && sessionLength > 1) {
      setSessionLength((sessionLength += -1));
    }
  };
  const handleIncrement = () => {
    if (type === "break" && breakLength < 60) {
      setBreakLength((breakLength += 1));
    }
    if (type === "session" && sessionLength < 60) {
      setSessionLength((sessionLength += 1));
    }
  };

  return (
    <div className="duration-incrementers">
      <h2 id={`"${type}-label"`} className="incrementer-label">
        {typeCapitalized} Length
      </h2>
      <button
        id={`"${type}-decrement"`}
        className="decrement-button"
        onClick={() => handleDecrement()}
      >
        Dec
      </button>
      <div id={`"${type}-length"`} className="incrementer-timer">
        {typeTimer}
      </div>
      <button
        id={`"${type}-increment"`}
        className="increment-button"
        onClick={() => handleIncrement()}
      >
        Inc
      </button>
    </div>
  );
}

export default DurationIncrementers;
