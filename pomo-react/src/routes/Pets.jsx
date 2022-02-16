export default function Pets() {
  return (
    <>
      <div className="body pt-5">
        <div className="main-container">
          <div className="text-container">
            <h1 className="logo-text text-center"> Choose your PomoPet! </h1>
            <div> 
              <img src={require('../assets/pets/cat1.gif')} width="200px" height="200px"/> 
              <img src={'https://c.tenor.com/02ckhzGY8fMAAAAC/pug-dance.gif'} width="200px" height="200px"/> 
              <img src={require('../assets/pets/dog1.gif')} width="200px" height="200px"/> 
              <img src={require('../assets/pets/dog2.gif')} width="200px" height="200px"/> 
              <img src={require('../assets/pets/hedgehog1.gif')} width="200px" height="200px"/> 
              <img src={require('../assets/pets/hedgehog2.gif')} width="200px" height="200px"/> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}