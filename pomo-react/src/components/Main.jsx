import React from "react";
import egg from '../assets/egg.png'

export default function Main(props) {
  return (
    <div className="body">
      <div className="main-container">
        <div className="text-container">
          <h1> {props.title} </h1>
          <h4 className="subheader">
            This is {props.title}
          </h4>
          <br/>
          <h3>
            <p> The Pomodoro Technique is a time management method that can be used for any task. For many people, time is an enemy. The anxiety triggered by “the ticking clock”, especially when it involves a deadline, leads to ineffective work and study habits which in turn lead to procrastination.</p>
            
            <p>The Pomodoro Technique aims to use time as a valuable ally in accomplishing what we want to do in the way we want to do it, and to enable us to continually improve the way we work or study.</p>

            <p>PomoPets is an incentivized Pomodoro timer. Begin your focus session with a mysterious, hatchable egg and upon completing your focus session, you are rewarded with a cute digital pet! </p>
          </h3>
        </div>
        <img src={egg} className="egg" width="400px" height="400px"/>
      </div>
    </div>
  );
}