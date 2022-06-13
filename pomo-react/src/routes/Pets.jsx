// component imports
import PetsCard from "../components/PetsCard";

// image asset imports
import pup from "../assets/pets/dog1.gif";
import hedgehog from "../assets/pets/hedgehog2.gif";
import cat from "../assets/pets/cat1.gif";
import egg2 from "../assets/eggs/egg2.png";
import egg3 from "../assets/eggs/egg3.png";
import egg4 from "../assets/eggs/egg4.png";
import egg5 from "../assets/eggs/egg5.png";
import egg6 from "../assets/eggs/egg6.png";
import egg7 from "../assets/eggs/egg7.png";

const _ = require("lodash");

export default function Pets() {
  // splice and randomize for unique eggs to display each time
  const arr = [egg2, egg3, egg4, egg5, egg6, egg7];
  const eggsPicked = _.sampleSize(arr, 3);

  const pet_info = [
    {
      name: "Pup",
      eggimg: eggsPicked[0],
      image: pup,
      description: "A very good boy who love naps!",
      type: 1,
    },
    {
      name: "Hedgehog",
      eggimg: eggsPicked[1],
      image: hedgehog,
      description: "A cuddly creature with many spikes!",
      type: 2,
    },
    {
      name: "Cat",
      eggimg: eggsPicked[2],
      image: cat,
      description: "A sassy cat who lives in luxury!",
      type: 3,
    },
  ];

  return (
    <>
      <div className="body pt-5">
        <div className="pets-container main-container">
          <div>
            <h1 className="pets logo-text text-center">
              {" "}
              Choose your PomoPet!{" "}
            </h1>

            <div className="pets-display position-sticky">
              {pet_info.map(pet => (
                <PetsCard
                  name={pet.name}
                  image={pet.image}
                  eggimg={pet.eggimg}
                  description={pet.description}
                  type={pet.type}
                  key={pet.type}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
