import PetsCard from '../components/PetsCard';
import pup from "../assets/pets/dog1.gif";
import hedgehog from "../assets/pets/hedgehog2.gif"
import cat from "../assets/pets/cat1.gif"

export default function Pets() {

  const pet_info = [{
    name:"Pup",
    image: pup,
    description:"A very good boy who love naps!",
    type: 1
  }, {
    name:"Hedgehog",
    image: hedgehog,
    description:"A cuddly creature with many spikes!",
    type: 2
  }, {
    name:"Cat",
    image: cat,
    description:"A sassy cat who lives in luxury!",
    type: 3
  }];

  return (
    <>
      <div className="body pt-5">
        <div className="main-container">
          <div className="text-container">
            <h1 className="pets logo-text text-center"> Choose your PomoPet! </h1>

            <div className='pets-display'>
              {pet_info.map((pet) => <PetsCard name={pet.name} image={pet.image} description={pet.description} type={pet.type}/>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
