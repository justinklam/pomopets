import React, {useContext, useEffect, useState} from "react";
import { SessionsContext } from "../context/SessionsContext";
import { getPets } from "../helpers/selectors";

// image assets
import pup from "../assets/pets/dog1.gif";
import hedgehog from "../assets/pets/hedgehog2.gif"
import cat from "../assets/pets/cat1.gif"

export default function MyPet() {

  const [session, setSession] = useContext(
    SessionsContext
  );

  const pet_info = [{
    name:"Pup",
    image: pup,
    description:"A very good boy who love naps!"
  }, {
    name:"Hedgehog",
    image: hedgehog,
    description:"A cuddly creature with many spikes!"
  }, {
    name:"Cat",
    image: cat,
    description:"A sassy cat who lives in luxury!"
  }];


  const [pets, setPets] = useState([]);

  useEffect(() => {
  const userPetsJsx = [];
  const getUserPets = getPets(session.state.id)
    .then((userPets) => {
      // console.log('getUserPets-userPets-----', userPets)
      userPets.map(pet => {
        let currentPet = {};
        if (pet.type === 1){
          currentPet = pet_info[0];
        }

        // if conditionals for stage and which pet is needed
  
        userPetsJsx.push(<div className="card" style={{width: "18rem"}} key={pet.id}>
        <div className="card-body">
          <img src={currentPet.image} alt="description" width="200px" height="200px"/> 
          <h5 className="card-title">{currentPet.name}</h5>
          <p className="card-text">{currentPet.description}</p>
            </div>
        </div>)
      });
      setPets(userPetsJsx);
    })
  }, []);
  
  return (
    <>
    {(pets.length > 0) ? pets.map(x => x) : ""}
    </>
  );

};