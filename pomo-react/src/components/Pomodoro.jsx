import React, { useContext, useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Button, Dropdown, DropdownButton } from "react-bootstrap";
import "react-circular-progressbar/dist/styles.css";
import { SessionsContext } from "../context/SessionsContext";

// helper functions
import { createTimer, updatePets } from "../helpers/helpers";

export default function Pomodoro(props) {
  const [session, setSession] = useContext(SessionsContext);

  const [tag, setTag] = useState("What are you focusing on?");

  const startingTimer = props.startingTimer || 0;

  const [displayMessage, setDisplayMessage] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(60 * startingTimer);
  const [maxSeconds, setMaxSeconds] = useState(60 * startingTimer);
  const [timeRunning, setTimeRunning] = useState(false);
  const [resetting, setResetting] = useState(false);

  const breakTime = 5 * 60;

  const userId = session.state.id;

  useEffect(() => {
    // timer set-up

    if (timeRunning) {
      //updates the timer
      let interval = setInterval(() => {
        // NOTE: must clear interval! otherwise bad practice
        clearInterval(interval);

        // handles the reset button
        if (resetting) {
          setCurrentSeconds(startingTimer * 60);
          setTimeRunning(false);
          setResetting(false);
          return;
        }
        if (currentSeconds === 0) {
          if (displayMessage) {
            setTimeRunning(false);
            setDisplayMessage(false); // hide the break
            setCurrentSeconds(startingTimer * 60); // reset initial timer

          } else {
            // break timer is running
            setTimeRunning(false);
            setDisplayMessage(true);
            setCurrentSeconds(breakTime);
            setMaxSeconds(breakTime);
            updatePets(userId);
            createTimer(userId, tag);
          }
        } else {
          setCurrentSeconds(currentSeconds - 1); // initial timer normal countdown
        }
      }, 1000); // 1000 = 25 min, 100 = 2.5 min total time
    }
  }, [currentSeconds, timeRunning]);

  const formatTime = () => {
    let minutes = Math.floor(currentSeconds / 60);
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    let seconds = currentSeconds % 60;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  const handleClick = e => {
    e.preventDefault();
    if (timeRunning) {
      // identifies if the timer is running or not
      setTimeRunning(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const description = e.target.text;
    setTag(description);
  };

  return (
    <div className="pomodoro">
      <div className="message text-center">
        {displayMessage && (
          <div>Time for a break! Your next session starts in: </div>
        )}
        <div
          className="circular-progress-bar mb-4"
          style={{ width: 350, height: 350 }}
        >
          <CircularProgressbar
            counterClockwise={true}
            value={(currentSeconds / maxSeconds) * 100}
            text={formatTime()}
          />
        </div>

        <div>
          <DropdownButton id="dropdown-basic-button" title={tag}>
            <Dropdown.Item className="dropdown" onClick={handleSubmit}>
              Study
            </Dropdown.Item>
            <Dropdown.Item className="dropdown" onClick={handleSubmit}>
              Exercise
            </Dropdown.Item>
            <Dropdown.Item className="dropdown" onClick={handleSubmit}>
              Work
            </Dropdown.Item>
            <Dropdown.Item className="dropdown" onClick={handleSubmit}>
              Tidy-Up
            </Dropdown.Item>
            <Dropdown.Item className="dropdown" onClick={handleSubmit}>
              Reading
            </Dropdown.Item>
            <Dropdown.Item className="dropdown" onClick={handleSubmit}>
              Meditation
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <div>
          <Button
            className="start-button"
            type="submit"
            variant="primary"
            onClick={() => {
              setTimeRunning(true);
            }}
          >
            Start
          </Button>
          <Button
            className="reset-button"
            type="submit"
            variant="danger"
            onClick={() => {
              setResetting(true);
            }}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
