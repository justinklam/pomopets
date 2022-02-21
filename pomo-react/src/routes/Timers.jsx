// import React, { useContext } from "react";
import Pomodoro from "../components/Pomodoro";
import MyPet from "../components/MyPet";
// import { SessionsContext } from "../context/SessionsContext";

export default function Timers() {
  const timeData = {
    time: 25,
  };

  // const [session, setSession] = useContext(
  //   SessionsContext
  // );

  return (
    <>
      <div className="body pt-5">
        <div className="timer-container main-container">
          <div className="text-container pt-2">
            <h1 className="logo-text text-center"> Timer </h1>
            <Pomodoro startingTimer={timeData.time}/>
            <MyPet/>
          </div>
        </div>
      </div>
    </>
  );
}
