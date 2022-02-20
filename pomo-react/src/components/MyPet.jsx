import React, {useContext, useEffect, useState} from "react";
import { SessionsContext } from "../context/SessionsContext";
import { getAllPets } from "../helpers/selectors";

// image assets
import pup1 from "../assets/pets/dog1.gif";
import pup2 from "../assets/pets/dog2.gif";
import pup3 from "../assets/pets/dog3.gif";
import hedgehog2 from "../assets/pets/hedgehog2.gif"
import cat1 from "../assets/pets/cat1.gif"
import cat2 from "../assets/pets/cat2.gif"
import cat3 from "../assets/pets/cat3.gif"

export default function MyPet() {

  const [session, setSession] = useContext(
    SessionsContext
  );

  const pet_info = [{
    name:"Pup",
    type: 1,
    action:"rest",
    image: pup1,
  },{
    name:"Pup",
    type: 1,
    action:"up",
    image: pup2,
  },
  {
    name:"Pup",
    type: 1,
    action:"party",
    image: pup3,
  },
  {
    name:"Hedgehog",
    type: 2,
    action: "faceplant",
    image: hedgehog2,
  }, 
  {
    name:"Cat",
    type: 3,
    action: "eat",
    image: cat1,
  },
  {
    name:"Cat",
    type: 3,
    action: "up",
    image: cat2,
  },
  {
    name:"Cat",
    type: 3,
    action: "float",
    image: cat3,
  }];

  const [pets, setPets] = useState([]);

  useEffect(() => {
    const userPetsJsx = [];
    if(session.state.id){
      const getUserPets = getAllPets(session.state.id)
        .then((userPets) => {
          console.log('MyPet - getUserPets-alluserPets-----', userPets)
          userPets.map(pet => {
            let currentPet = {};
            console.log(pet);
            if (pet.pet.type === 1){
              currentPet = pet_info[1];
            }
            if (pet.pet.type === 2){
              currentPet = pet_info[4];
            }
            if (pet.pet.type === 3){
              currentPet = pet_info[6];
            }
  
            // if conditionals for stage and which pet is needed
            userPetsJsx.push(
            <div className="card" style={{width: "18rem"}} key={pet.id}>
              <div className="card-body">
                <img src={currentPet.image} alt="pet-image" width="200px" height="200px"/> 
                <h5 className="card-title">{pet.pet.name}</h5>
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