import React from "react";
import egg from '../assets/egg.png'

export default function Main(props) {
  return (
    <div className="container"> 
      <h1>
        {props.title}
      </h1>
      <h4>
        This is {props.title}
      </h4>
      <img src={egg}/>
    </div>
  );
}