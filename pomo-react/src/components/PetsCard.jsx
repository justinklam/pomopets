import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPets } from "../helpers/selectors";
import { Button } from 'react-bootstrap';

export default function PetsCard(props) {

  const [toggleName, setToggleName] = useState(false);

  const [petName, setPetName] = useState({
    name: ""
  });
  
  let navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPetName({...petName, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPets(petName).then((response) => {
      // console.log('response', response);
      // setSession({ state: response.data });
      navigate("/timers");
    })
    .catch((error) => {
      throw error;
    });
  };

  return (
    <>
      <div class="card" style={{width: "18rem"}}>
        <div class="card-body">
          <img src={props.image} alt="description" width="200px" height="200px"/> 
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.name} Description</p>
          <div class="form-group">
            <Button for="exampleFormControlTextarea1" onClick={() =>setToggleName(!toggleName)}>Choose Your Pet</Button>
            {toggleName?<div><textarea class="form-control"  placeholder="Name Your Pet" id="exampleFormControlTextarea1" rows="1" onChange={handleChange}></textarea>
            <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button></div>:""}
          </div>
        </div>
      </div>
    </>
  );
}