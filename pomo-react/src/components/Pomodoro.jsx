import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Pomodoro() {

  const startingTimer = 0.1;
  // let maxSeconds = 60 * startingTimer;
  // let currentSeconds = maxSeconds;

  const [ minutes, setMinutes ] = useState(0);
  const [ seconds, setSeconds ] = useState(6);
  const [ displayMessage, setDisplayMessage ] = useState(false);
  const [ currentSeconds, setCurrentSeconds ] = useState(60 * startingTimer);
  const [ maxSeconds, setMaxSeconds ] = useState(60 * startingTimer);

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
          // case: timer has ended, start a break, or break is finished so start a new timer
          let minutes = displayMessage ? 24 : 4 // if message is displayed have timer start at 24:59, if not, set at 4 mins for duration of break session
          let seconds = 59;
          // currentSeconds = 4 * 60 + seconds;
          // maxSeconds = currentSeconds;
          setMaxSeconds(minutes * 60 + seconds);

          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage); // if false set to true, if true, set to false
        }
      } else {
        // case where seconds are not 0, lower by 1
        setSeconds(seconds - 1);
      } 
      setCurrentSeconds(minutes * 60 + seconds);
    }, 1000)
  }, [ seconds ]) // side-effect every time seconds are updated
  
  // ensure double digits in timer are always present
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;
  // maxSeconds = displayMessage ? startingTimer * 60 : 4 * 60 + 59;
  // currentSeconds = minutes * 60 + seconds;

  return (
    <div className="pomodoro">
      <div className="message text-center">
          {displayMessage && <div>Time for a break! Your next session starts in: </div>}
          <div className="circular-progress-bar" style={{ width: 300, height: 300 }}>
          <CircularProgressbar counterClockwise={true} value={(currentSeconds/ maxSeconds)*100} text={`${timerMinutes}:${timerSeconds}`} />
        </div>
      </div>
    </div>
  );
}