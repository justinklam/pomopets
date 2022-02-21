import React, { useContext, useState } from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Pomodoro from "../components/Pomodoro";
import MyPet from "../components/MyPet";
import { SessionsContext } from "../context/SessionsContext";
// import { createTimer } from "../helpers/helpers";

export default function Timers() {
  const timeData = {
    time: 0.5,
  };

  const [session, setSession] = useContext(
    SessionsContext
  );

  const [tag, setTag] = useState("Misc");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = session.state.id;
    const description = e.target.text;
    setTag(description);
    // createTimer(userId, description)
  };

  return (
    <>
      <div className="body pt-5">
        <div className="main-container">
          <div className="text-container pt-2">
            <h1 className="logo-text text-center"> Timer </h1>
            <Pomodoro startingTimer={timeData.time} tag={tag} />
            <MyPet/>
          </div>
        </div>
      </div>
    </>
  );
}
