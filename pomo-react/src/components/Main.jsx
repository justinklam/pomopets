import React from "react";
import egg from '../assets/egg.png';
import HomeNavBar from './HomeNavBar';

export default function Main(props) {
  return (
    <>
      <HomeNavBar />
      <div className="body pt-5">
        <div className="main-container">
          <div className="text-container pt-2">

            <h1 className="logo-text"> {props.title} </h1>
            <br/>
            <h3>
              <p className="blurb">PomoPets is an incentivized Pomodoro timer. Begin your focus session with a mysterious, hatchable egg and upon completing your focus session, you are rewarded with a cute digital pet! </p>
              <br>
              </br>
              <p className="blurb">Pomodoro sessions are typically 25 minutes in length, with a 5 minute break between sessions. After every session, take a longer break to recharge and refresh your mind! </p>
            </h3>
          </div>
          <img src={egg} className="egg" width="400px" height="400px"/>
        </div>
      </div>
    </>
  );
}