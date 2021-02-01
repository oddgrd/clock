import { React, useEffect, useState } from "react";
import MediaControls from "./MediaControls";

function Timer({
  sessionLength,
  timerState,
  breakLength,
  setBreakLength,
  setSessionLength,
  toggleTimerState,
  timerType,
  setTimerType,
}) {
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);

  const secondsToMinutes = (seconds) => {
    const minutesLeft = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    const minString = minutesLeft < 10 ? `0${minutesLeft}` : `${minutesLeft}`;
    const secString = secondsLeft < 10 ? `0${secondsLeft}` : `${secondsLeft}`;
    return `${minString}:${secString}`;
  };
  const playSound = () => {
    const sound = document.getElementById("beep");
    sound.currentTime = 0;
    sound.play();
  };

  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);
  useEffect(() => {
    //if (!timeLeft) return;
    if (timeLeft === 0 && timerType === "Session") {
      playSound();
      setTimerType("Break");
      setTimeLeft(breakLength * 60);
    }
    if (timeLeft === 0 && timerType === "Break") {
      setTimerType("Session");
      setTimeLeft(sessionLength * 60);
    }
    if (timerState) {
      var t = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(t);
    }
  });
  return (
    <div className="session-view">
      <h2 id="timer-label" style={{ color: timeLeft < 60 ? "red" : "#ffd700" }}>
        {timerType}
      </h2>
      <h1 id="time-left" style={{ color: timeLeft < 60 ? "red" : "#ffd700" }}>
        {secondsToMinutes(timeLeft)}
      </h1>
      <MediaControls
        setBreakLength={setBreakLength}
        setSessionLength={setSessionLength}
        timerState={timerState}
        toggleTimerState={toggleTimerState}
        setTimeLeft={setTimeLeft}
        setTimerType={setTimerType}
      />
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );
}

export default Timer;
