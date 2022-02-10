import React from "react";
import egg from '../assets/egg.png'

export default function Main(props) {
  return (
    <div className="body">
      <div className="container">
        <div className="text-container">
          <h1>
            {props.title}
          </h1>
          <h4 className="subheader">
            This is {props.title}
          </h4>
        </div>
        <img src={egg} className="egg" width="400px" height="400px"/>
      </div>
    </div>
  );
}