import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faUndo } from "@fortawesome/free-solid-svg-icons";
const play = <FontAwesomeIcon icon={faPlay} size="2x" />;
const pause = <FontAwesomeIcon icon={faPause} size="2x" />;
const reset = <FontAwesomeIcon icon={faUndo} size="2x" />;
function TimerControls({
  setBreakLength,
  setSessionLength,
  timerState,
  toggleTimerState,
  setTimeLeft,
  setTimerType,
}) {
  const handleReset = () => {
    toggleTimerState(false);
    setTimerType("Session");
    setTimeLeft(25 * 60);
    setBreakLength(5);
    setSessionLength(25);
    const sound = document.getElementById("beep");
    sound.currentTime = 0;
    sound.pause();
  };
  const handlePlayPause = () => {
    toggleTimerState(!timerState);
  };
  return (
    <div className="media-controls">
      <button id="start_stop" onClick={() => handlePlayPause()}>
        {play}
        {pause}
      </button>
      <button id="reset" onClick={() => handleReset()}>
        {reset}
      </button>
    </div>
  );
}

export default TimerControls;
