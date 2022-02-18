import React, {useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPets } from "../helpers/helpers";
import { Button } from 'react-bootstrap';
import { SessionsContext } from "../context/SessionsContext";

export default function PetsCard(props) {

  const [toggleName, setToggleName] = useState(false);

  const [petName, setPetName] = useState("");

  const [session, setSession] = useContext(
    SessionsContext
  );
  
  let navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log('handlechange', name, value)
    setPetName(value)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('petscard Session', session)
    const userId = session.state.id
    createPets(petName, userId).then((response) => {
      // console.log('response', response);
      // console.log('package', petName, userId);
      // setSession({ state: response.data });
      navigate("/timers");
    })
    .catch((error) => {
      throw error;
    });
  };

  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <img src={props.image} alt="description" width="200px" height="200px"/> 
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <div className="form-group">
            <Button className="pet-button" for="exampleFormControlTextarea1" onClick={() =>setToggleName(!toggleName)}>Choose This Pet</Button>
            {toggleName?<div><input className="form-control" placeholder="Name Your Pet" name="pet_name" id="exampleFormControlTextarea1" rows="1" onChange={handleChange}></input>
            <Button className="pet-button" type="submit" onClick={handleSubmit}>Submit</Button></div>:""}
          </div>
        </div>
      </div>
    </>
  );
}