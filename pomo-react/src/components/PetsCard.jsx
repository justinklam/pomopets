import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionsContext } from "../context/SessionsContext";
import { Button } from "react-bootstrap";
import { createPets } from "../helpers/helpers";

export default function PetsCard(props) {
  const [toggleName, setToggleName] = useState(false);

  const [petName, setPetName] = useState("");

  const [session, setSession] = useContext(SessionsContext);

  let navigate = useNavigate();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setPetName(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const userId = session.state.id;
    createPets(petName, userId, props.type)
      .then(response => {
        navigate("/timers");
      })
      .catch(error => {
        throw error;
      });
  };

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="pets-card-body card-body">
          <div className="single-pet">
            <img
              className="petimg"
              src={props.image}
              alt="description"
              width="200px"
              height="200px"
            />
            <img
              className="eggimg"
              src={props.eggimg}
              alt="description"
              width="200px"
              height="200px"
            />
          </div>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <div className="pets-form-group form-group">
            <Button
              className="pet-button"
              for="exampleFormControlTextarea1"
              onClick={() => setToggleName(!toggleName)}
            >
              Choose This Pet
            </Button>
            {toggleName ? (
              <div className="pets-form-group">
                <input
                  className="pets-form form-control"
                  placeholder="Name Your Pet"
                  name="pet_name"
                  id="exampleFormControlTextarea1"
                  rows="1"
                  onChange={handleChange}
                ></input>
                <Button
                  className="pet-button"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}
