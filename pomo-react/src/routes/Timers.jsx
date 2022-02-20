import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import Pomodoro from "../components/Pomodoro";
import MyPet from "../components/MyPet";

export default function Timers() {
  const timeData = {
    time: 25,
  };

  const [tag, setTag] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <div className="body pt-5">
        <div className="main-container">
          <div className="text-container pt-2">
            <DropdownButton id="dropdown-basic-button" title="Timer Tag">
              <Dropdown.Item onClick={handleSubmit}>Study</Dropdown.Item>
              <Dropdown.Item onClick={handleSubmit}>Exercise</Dropdown.Item>
              <Dropdown.Item onClick={handleSubmit}>Work</Dropdown.Item>
              <Dropdown.Item onClick={handleSubmit}>Tidy-Up</Dropdown.Item>
            </DropdownButton>
            <h1 className="logo-text text-center"> Timer </h1>
            <Pomodoro startingTimer={timeData.time} />
            <MyPet />
          </div>
        </div>
      </div>
    </>
  );
}
