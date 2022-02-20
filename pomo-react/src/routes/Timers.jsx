import React, { useState } from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Pomodoro from "../components/Pomodoro";
import MyPet from "../components/MyPet";

export default function Timers() {
  const timeData = {
    time: 25,
  };

  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="body pt-5">
        <DropdownButton id="dropdown-basic-button" title="Timer Tag">
          <Dropdown.Item onClick={handleSubmit}>Study</Dropdown.Item>
          <Dropdown.Item onClick={handleSubmit}>Entertainment</Dropdown.Item>
          <Dropdown.Item onClick={handleSubmit}>Work</Dropdown.Item>
          <Dropdown.Item onClick={handleSubmit}>Rest</Dropdown.Item>
        </DropdownButton>
        <div className="main-container">
          <div className="text-container pt-2">
            <h1 className="logo-text text-center"> Timer </h1>
            <Pomodoro startingTimer={timeData.time} />
            <MyPet/>
          </div>
        </div>
      </div>
    </>
  );
}
