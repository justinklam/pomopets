export default function Pets() {
  return (
    <>
      <div className="body pt-5">
        <div className="main-container">
          <div className="text-container">
            <h1 className="logo-text text-center"> Choose your PomoPet! </h1>
            <div className="pet-pics text-center"> 
              <img src={require('../assets/pets/cat1.gif')} alt="pinkpusheen" width="185px" height="185px"/> 
              <img src={require('../assets/pets/cat2.gif')} alt="bluepusheen" width="185px" height="185px"/>
              <br/>
              <img src={require('../assets/pets/dog1.gif')} alt="pugsheen" width="200px" height="185px"/>  
              <img src={require('../assets/pets/dog3.gif')} alt="toypoodle" width="400px" height="250px"/>
              <img src={require('../assets/pets/dog4.gif')} alt="downwarddog" width="300px" height="250px"/> 
              <img src={require('../assets/pets/dog2.gif')} alt="balldog" width="325px" height="300px"/>
              <br />
              <img src={require('../assets/pets/hedgehog1.gif')} alt="crownhedgehog" width="200px" height="200px"/> 
              <img src={require('../assets/pets/hedgehog2.gif')} alt="bowinghedgehog" width="200px" height="200px"/> 
              <img src={require('../assets/pets/hedgehog3.gif')} alt="spinhedgehog" width="200px" height="200px"/> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
