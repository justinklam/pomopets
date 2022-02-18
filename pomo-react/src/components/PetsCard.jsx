import { useState } from "react";
import { Button } from 'react-bootstrap';

export default function PetsCard(props) {

  const [toggleName, setToggleName] = useState(false);

  return (
    <div class="card" style={{width: "18rem"}}>
      <div class="card-body">
        <img src={props.image} alt="description" width="200px" height="200px"/> 
        <h5 class="card-title">{props.name}</h5>
        <p class="card-text">{props.name} Description</p>
        <div class="form-group">
          <Button for="exampleFormControlTextarea1" onClick={() =>setToggleName(!toggleName)}>Choose Your Pet</Button>
          {toggleName?<div><textarea class="form-control"  placeholder="Name Your Pet" id="exampleFormControlTextarea1" rows="1"></textarea>
          <Button variant="primary" type="submit">Submit</Button></div>:""}
        </div>
      </div>
    </div>
  );
}