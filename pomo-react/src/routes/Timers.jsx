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
          <div>
            <h1 className="logo-text text-center"> Timer </h1>
            <div>
              <Pomodoro startingTimer={timeData.time}/>
            </div>
            <div className="pet-timer">
              <MyPet/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
