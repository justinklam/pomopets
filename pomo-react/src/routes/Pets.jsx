export default function Pets() {
  return (
    <>
      <div className="body pt-5">
        <div className="main-container">
          <div className="text-container">
            <h1 className="logo-text text-center"> Choose your PomoPet! </h1>
            <div className="pet-pics text-center"> 
              <img src={require('../assets/pets/cat1.gif')} width="185px" height="185px"/> 
              <img src={require('../assets/pets/cat2.gif')} width="185px" height="185px"/> 
              <img src={require('../assets/pets/dog3.gif')} width="400px" height="250px"/>
              <img src={require('../assets/pets/pug.gif')} width="300px" height="250px"/> 
              <img src={require('../assets/pets/dog2.gif')} width="325px" height="300px"/>
              <img src={require('../assets/pets/hedgehog1.gif')} width="200px" height="200px"/> 
              <img src={require('../assets/pets/hedgehog2.gif')} width="200px" height="200px"/> 
              <img src={require('../assets/pets/hedgehog3.gif')} width="200px" height="200px"/> 
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
