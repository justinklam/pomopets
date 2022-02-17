import PetsCard from '../components/PetsCard';
import pup from "../assets/pets/dog1.gif";
import hedgehog from "../assets/pets/hedgehog2.gif"
import cat from "../assets/pets/cat1.gif"

export default function Pets() {

  const pet_info = [{
    name:"Pup",
    image: pup
  }, {
    name:"Hedgehog",
    image: hedgehog
  }, {
    name:"Cat",
    image: cat
  }];

  return (
    <>
      <div className="body pt-5">
        <div className="main-container">
          <div className="text-container">
            <h1 className="logo-text text-center"> Choose your PomoPet! </h1>
            <div>
              {pet_info.map((pet) =><PetsCard name={pet.name} image={pet.image}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}