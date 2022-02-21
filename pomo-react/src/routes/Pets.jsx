import PetsCard from "../components/PetsCard";
import pup from "../assets/pets/dog1.gif";
import hedgehog from "../assets/pets/hedgehog2.gif";
import cat from "../assets/pets/cat1.gif";
import egg from "../assets/eggs/egg.png";
import egg2 from "../assets/eggs/egg2.png";
import egg3 from "../assets/eggs/egg3.png";
import egg4 from "../assets/eggs/egg4.png";
import egg5 from "../assets/eggs/egg5.png";
import egg6 from "../assets/eggs/egg6.png";

export default function Pets() {
  // splice and randomize for unique eggs to display each time
  // const arr = [egg, egg2, egg3, egg4, egg5, egg6];
  // const eggimgs = [Math.floor(Math.random() * arr.length)];

  const pet_info = [
    {
      name: "Pup",
      eggimg: egg6,
      image: pup,
      description: "A very good boy who love naps!",
      type: 1,
    },
    {
      name: "Hedgehog",
      eggimg: egg3,
      image: hedgehog,
      description: "A cuddly creature with many spikes!",
      type: 2,
    },
    {
      name: "Cat",
      eggimg: egg5,
      image: cat,
      description: "A sassy cat who lives in luxury!",
      type: 3,
    },
  ];

  return (
    <>
      <div className="body pt-5">
        <div className="pets-container main-container">
          <div className="text-container">
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
