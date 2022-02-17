import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Pomodoro(props) {
  const startingTimer = props.startingTimer || 0;

  const [displayMessage, setDisplayMessage] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(60 * startingTimer);
  const [maxSeconds, setMaxSeconds] = useState(60 * startingTimer);

  useEffect(() => {
    // timer set-up
    let interval = setInterval(() => {
      // NOTE: must clear interval! otherwise bad practice - see what happens without clearing interval
      clearInterval(interval);
      
      if (currentSeconds === 0) {
        if (displayMessage) {
          setDisplayMessage(false)
          setCurrentSeconds(24 * 60)
        } else {
          setDisplayMessage(true)
          setCurrentSeconds(4 * 60 + 59)
        }
      } else {
      setCurrentSeconds(currentSeconds - 1);
        
      }
    }, 1000);
  }, [currentSeconds]); 

  const formatTime = () => {
    let minutes = Math.floor(currentSeconds / 60);
    minutes = minutes < 10 ? `0${minutes}`: minutes;
    let seconds = currentSeconds % 60;
    seconds = seconds < 10 ? `0${seconds}`: seconds;
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="pomodoro">
      <div className="message text-center">
        {displayMessage && (
          <div>Time for a break! Your next session starts in: </div>
        )}
        <div
          className="circular-progress-bar"
          style={{ width: 350, height: 350 }}
        >
          <CircularProgressbar
            counterClockwise={true}
            value={(currentSeconds / maxSeconds) * 100}
            text={formatTime()}
          />
        </div>
      </div>
    </div>
  );
}
