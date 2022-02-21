import React, {useContext, useEffect, useState} from "react";
import { SessionsContext } from "../context/SessionsContext";
import { getAllPets } from "../helpers/selectors";

// image assets
import pup1 from "../assets/pets/dog1.gif";
import pup2 from "../assets/pets/dog2.gif";
import pup3 from "../assets/pets/dog3.gif";
import hedgehog1 from "../assets/pets/hedgehog1.gif"
import hedgehog2 from "../assets/pets/hedgehog2.gif"
import hedgehog3 from "../assets/pets/hedgehog3.gif"
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
    action: "surprise",
    image: hedgehog1,
  }, 
  {
    name:"Hedgehog",
    type: 2,
    action: "charge",
    image: hedgehog2,
  },
  {
    name:"Hedgehog",
    type: 2,
    action: "jump",
    image: hedgehog3,
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

  const [userPets, setUserPets] = useState();

  useEffect(() => {
    const userPetsJsx = [];
    if(session.state.id){
      const getUserPets = getAllPets(session.state.id)
        .then((userPets) => {
          userPets.forEach ((pet, i) => {
            userPets[i].pet.clicked = false;
            
            if (pet.pet.type === 1){
              userPets[i].pet.info = pet_info[0]
              userPets[i].pet.info.image2 = pet_info[1].image
              userPets[i].pet.info.image3 = pet_info[2].image
              if(pet.pet.stage === 0) {
                userPets[i].pet.activeImage = pet_info[0].image
              } else if (pet.pet.stage > 0) {
                userPets[i].pet.activeImage = pet_info[1].image
              }
            }
            if (pet.pet.type === 2){
              userPets[i].pet.info = pet_info[3]
              userPets[i].pet.info.image2 = pet_info[4].image
              userPets[i].pet.info.image3 = pet_info[5].image
              if(pet.pet.stage === 0) {
                userPets[i].pet.activeImage = pet_info[3].image
              } else if (pet.pet.stage > 0) {
                userPets[i].pet.activeImage = pet_info[4].image
              }
            }
            if (pet.pet.type === 3){
              userPets[i].pet.info = pet_info[6]
              userPets[i].pet.info.image2 = pet_info[7].image
              userPets[i].pet.info.image3 = pet_info[8].image
              if(pet.pet.stage === 0) {
                userPets[i].pet.activeImage = pet_info[6].image
              } else if (pet.pet.stage > 0) {
                userPets[i].pet.activeImage = pet_info[7].image
              }
            }
          }
        )
        console.log('foreach Update', userPets);
      setUserPets(userPets);
        })}
      }, []);
 
  const handleClick = function(e){
    const dataId = e.target.getAttribute("dataId")
    console.log('dataid', dataId)

    // if (e.target.src === window.location.origin+pet_info[0].image || e.target.src === window.location.origin+pet_info[1].image){
      const pets = [...userPets];
      pets.forEach((pet, i)=> {
        // console.log('pet.pet.id', pet.pet.id)
          if (dataId == pet.pet.id) {
            pets[i].pet.clicked = !pets[i].pet.clicked
          }
          // console.log('foreach if');
        // }
      });
      setUserPets(pets);
  };

  
  return (
    <>
    {userPets ? userPets.map(pet => (
      <div className="card" style={{width: "18rem"}} key={pet.pet.id}>
              <div className="card-body">
                <img dataId={pet.pet.id} src={pet.pet.clicked ? pet.pet.info.image3 : pet.pet.activeImage} alt="pet-image" width="200px" height="200px" onClick={handleClick}/> 
                <h5 className="card-title">{pet.pet.name}</h5>
              </div>
            </div>
      )): ""}
    </>
)};