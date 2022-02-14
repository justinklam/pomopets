import React, { useState, useEffect } from "react";

export default function Pomodoro() {

  const [ minutes, setMinutes ] = useState(25);
  const [ seconds, setSeconds ] = useState(0);
  const [ displayMessage, setDisplayMessage ] = useState(false);

  useEffect(() => {

  }, [ seconds ]) // side-effect every time seconds are updated

  return (<div className="pomodoro">
    <div className="message">
      <div>Time for a break! New session starts in:</div>
    </div>
    <div className="timer">25:00</div>
  </div>
  );
}