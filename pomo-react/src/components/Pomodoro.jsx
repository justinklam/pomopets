import React, { useState, useEffect } from "react";

export default function Pomodoro() {

  const [ minutes, setMinutes ] = useState(25);
  const [ seconds, setSeconds ] = useState(0);
  const [ displayMessage, setDisplayMessage ] = useState(false);

  useEffect(() => {
    // timer set-up
    let interval = setInterval(() => {
      // NOTE: must clear interval! otherwise bad practice - see what happens without clearing interval 
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          // case timer has ended, start a break, or break is finished so start a new timer
          let minutes = displayMessage ? 24 : 4 // if message is displayed have timer start at 24:59, if not, set at 4 mins for duration of break session
          let seconds = 59;

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage); // if false set to true, if true, set to false
        }
      } else {
        // case where seconds are not 0, lower by 1
        setSeconds(seconds - 1);
      }
    }, 1000)
  }, [ seconds ]) // side-effect every time seconds are updated

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