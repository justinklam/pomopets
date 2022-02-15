import React from "react";
import egg from '../assets/egg.png'

export default function Main(props) {
  return (
    <div className="body pt-5">
      <div className="main-container">
        <div className="text-container pt-2">
          <h1> {props.title} </h1>
          <h4 className="subheader">
            This is {props.title}
          </h4>
          <br/>
          <h3>
            <p>PomoPets is an incentivized Pomodoro timer. Begin your focus session with a mysterious, hatchable egg and upon completing your focus session, you are rewarded with a cute digital pet! </p>
          </h3>
        </div>
        <img src={egg} className="egg" width="400px" height="400px"/>
      </div>
    </div>
  );
}