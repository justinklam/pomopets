import React, {useContext, useEffect, useState} from "react";
import { SessionsContext } from "../context/SessionsContext";
import { getAllPets } from "../helpers/selectors";

// image assets
import pup1 from "../assets/pets/dog1.gif";
import pup2 from "../assets/pets/dog2.gif";
import pup3 from "../assets/pets/dog3.gif";
import pup4 from "../assets/pets/dog4.gif";
import pup5 from "../assets/pets/dog5.gif";
import hedgehog1 from "../assets/pets/hedgehog1.gif"
import hedgehog2 from "../assets/pets/hedgehog2.gif"
import hedgehog3 from "../assets/pets/hedgehog3.gif"
import hedgehog4 from "../assets/pets/hedgehog4.gif"
import hedgehog5 from "../assets/pets/hedgehog5.gif"
import cat1 from "../assets/pets/cat1.gif"
import cat2 from "../assets/pets/cat2.gif"
import cat3 from "../assets/pets/cat3.gif"
import cat4 from "../assets/pets/cat4.gif"
import cat5 from "../assets/pets/cat5.gif"

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
    name:"Pup",
    type: 1,
    action:"jump",
    image: pup4,
  },
  {
    name:"Pup",
    type: 1,
    action:"swim",
    image: pup5,
  },
  {
    name:"Hedgehog",
    type: 2,
    action: "surprise",
    image: hedgehog4,
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
    name:"Hedgehog",
    type: 2,
    action: "heart",
    image: hedgehog1,
  }, 
  {
    name:"Hedgehog",
    type: 2,
    action: "dance",
    image: hedgehog5,
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
  },  
  {
    name:"Cat",
    type: 3,
    action: "swim",
    image: cat4,
  },
  {
    name:"Cat",
    type: 3,
    action: "dance",
    image: cat5,
  }];

  const [userPets, setUserPets] = useState();

  useEffect(() => {
    // const userPetsJsx = [];
    if(session.state.id){
      const getUserPets = getAllPets(session.state.id)
        .then((userPets) => {
          userPets.forEach ((pet, i) => {            
            if (pet.pet.type === 1){
              userPets[i].pet.info = pet_info[0]
              userPets[i].pet.info.images = [
                pet_info[0].image,
                pet_info[1].image,
                pet_info[2].image,
                pet_info[3].image,
                pet_info[4].image
              ];
            }
            if (pet.pet.type === 2){
              userPets[i].pet.info = pet_info[5]
              userPets[i].pet.info.images = [
                pet_info[5].image,
                pet_info[6].image,
                pet_info[7].image,
                pet_info[8].image,
                pet_info[9].image
              ];
            }
            if (pet.pet.type === 3){
              userPets[i].pet.info = pet_info[10]
              userPets[i].pet.info.images = [
                pet_info[10].image,
                pet_info[11].image,
                pet_info[12].image,
                pet_info[13].image,
                pet_info[14].image
              ];
            }
            userPets[i].pet.info.activeImage = userPets[i].pet.info.images[0];
          }
        )
      setUserPets(userPets);
        })}
      }, []);
 
  const handleClick = function(e){
    const dataId = e.target.getAttribute("dataId");
      // work-around for deep cloning pets
      const pets = JSON.parse(JSON.stringify(userPets));
      pets.forEach((pet)=> {
          if (dataId == pet.pet.id) {
            const imageIndex = pet.pet.info.images.indexOf(pet.pet.info.activeImage)
            let newIndex = imageIndex+1;
            if(imageIndex >= pet.pet.info.images.length - 1){
              newIndex = 0;
            }
            pet.pet.info.activeImage = pet.pet.info.images[newIndex];    
          }
      });
      setUserPets(pets);
  };
  
  return (
    <>
    {userPets ? userPets.map(pet => (
      <div className="card pet-card-timer" style={{width: "18rem"}} key={pet.pet.id}>
              <div className="card-body pet-card-body-timer">
                <h5 className="pet-timer-pet-title card-title">{pet.pet.name}</h5>
                <img dataId={pet.pet.id} src={pet.pet.info.activeImage} width="200px" height="200px" onClick={handleClick}/> 
              </div>
            </div>
      )): ""}

    {/* Only show index 0 */}
    {/* {userPets ? 
      <div className="card pet-card-timer" style={{width: "18rem"}} key={userPets[0].pet.id}>
        <div className="card-body pet-card-body-timer">
          <h5 className="pet-timer-pet-title card-title">{userPets[0].pet.name}</h5>
          <img dataId={userPets[0].pet.id} src={userPets[0].pet.info.activeImage} width="200px" height="200px" onClick={handleClick}/> 
        </div>
      </div> : ""} */}
    </>
)};