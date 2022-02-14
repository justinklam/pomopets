import React, { useState, useEffect } from "react";

export default function Pomodoro() {

  const [ minutes, setMinutes ] = useState(25);
  const [ seconds, setSeconds ] = useState(0);
  const [ displayMessage, setDisplayMessage ] = useState(false);

  useEffect(() => { }, [ seconds ]) // side-effect every time seconds are updated

  // ensure double digits in timer are always present
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="pomodoro">
      <div className="message">
        {displayMessage && <div>Time for a break! Your next session starts in: </div>}
        <div className="timer">
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
    </div>
  );
}