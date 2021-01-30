import { React, useEffect, useState } from "react";

function Timer({ sessionLength, timer, setTimer, timerState }) {
  const [timeLeft, setTimeLeft] = useState(sessionLength * 60);
  const sessionLengthTime =
    sessionLength < 10 ? `0${sessionLength}` : sessionLength;

  const calculateRemainingTime = () => {
    const now = Date.now();
    const then = Date.now() + sessionLength * 1000 * 60;

    let difference = +then - +now;
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    console.log(difference / 1000);
    return difference / 1000;
  };

  const secondsToMinutes = (seconds) => {
    const minutesLeft = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    const minString = minutesLeft < 10 ? `0${minutesLeft}` : `${minutesLeft}`;
    const secString = secondsLeft < 10 ? `0${secondsLeft}` : `${secondsLeft}`;
    return `${minString}:${secString}`;
  };
  useEffect(() => {
    setTimeLeft(sessionLength * 60);
  }, [sessionLength]);
  useEffect(() => {
    if (!timeLeft) return;
    if (timerState) {
      var t = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    }
  });
  // console.log(secondsToMinutes(1500));
  // console.log(secondsToMinutes(1499));
  return secondsToMinutes(timeLeft);
}

export default Timer;
