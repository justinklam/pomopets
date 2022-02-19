import React, {useContext, useEffect, useState} from "react";
import { SessionsContext } from "../context/SessionsContext";
import { getPets } from "../helpers/selectors";

// image assets
import pup1 from "../assets/pets/dog1.gif";
import hedgehog2 from "../assets/pets/hedgehog2.gif"
import cat1 from "../assets/pets/cat1.gif"

export default function MyPet() {

  const [session, setSession] = useContext(
    SessionsContext
  );

  const pet_info = [{
    name:"Pup",
    image: pup1,
  }, {
    name:"Hedgehog",
    image: hedgehog2,
  }, {
    name:"Cat",
    image: cat1,
  }];


  const [pets, setPets] = useState([]);

  useEffect(() => {
    const userPetsJsx = [];
    if(session.state.id){
      const getUserPets = getPets(session.state.id)
        .then((userPets) => {
          console.log('getUserPets-userPets-----', userPets)
          userPets.map(pet => {
            let currentPet = {};
            if (pet.type === 1){
              currentPet = pet_info[0];
            }
            if (pet.type === 2){
              currentPet = pet_info[1];
            }
            if (pet.type === 3){
              currentPet = pet_info[2];
            }
  
            // if conditionals for stage and which pet is needed
            userPetsJsx.push(
            <div className="card" style={{width: "18rem"}} key={pet.id}>
              <div className="card-body">
                <img src={currentPet.image} alt="pet-image" width="200px" height="200px"/> 
                <h5 className="card-title">{currentPet.name}</h5>
              </div>
            </div>)
          });
          setPets(userPetsJsx);
        })
    }
  }, []);
  
  return (
    <>
    {(pets.length > 0) ? pets.map(x => x) : ""}
    </>
  );

};