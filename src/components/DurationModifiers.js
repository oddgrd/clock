import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
const up = <FontAwesomeIcon icon={faAngleUp} size="2x" />;
const down = <FontAwesomeIcon icon={faAngleDown} size="2x" />;
function DurationModifiers({
  type,
  breakLength,
  setBreakLength,
  setSessionLength,
  sessionLength,
  timerState,
}) {
  const typeCapitalized = type.charAt(0).toUpperCase() + type.slice(1);
  const typeTimer = type === "break" ? breakLength : sessionLength;

  const handleIncrement = () => {
    if (!timerState) {
      if (type === "break" && breakLength < 60) {
        setBreakLength((breakLength += 1));
      }
      if (type === "session" && sessionLength < 60) {
        setSessionLength((sessionLength += 1));
      }
    }
  };
  const handleDecrement = () => {
    if (!timerState) {
      if (type === "break" && breakLength > 1) {
        setBreakLength((breakLength += -1));
      }
      if (type === "session" && sessionLength > 1) {
        setSessionLength((sessionLength += -1));
      }
    }
  };

  return (
    <div className="duration-modifiers">
      <h2 id={`${type}-label`} className="modifier-label unselectable">
        {typeCapitalized} Length
      </h2>
      <button
        id={`${type}-increment`}
        className="increment-button"
        onClick={() => handleIncrement()}
      >
        {up}
      </button>
      <div id={`${type}-length`} className="modifier-timer unselectable">
        {typeTimer}
      </div>
      <button
        id={`${type}-decrement`}
        className="decrement-button"
        onClick={() => handleDecrement()}
      >
        {down}
      </button>
    </div>
  );
}

export default DurationModifiers;
