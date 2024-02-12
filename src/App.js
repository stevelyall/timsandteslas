// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import TTMapContainer from './containers/TTMapContainer';
import API from './api/API';

function App() {
  
  const [userLocation, setUserLocation] = useState(undefined);
  const [isLoading, setisLoading] = useState(true);
  const [teslaSites, setTeslaSites] = useState(undefined);

  // load location when app loads
  useEffect(() => {
    getUserLocation();
    // TODO handle API unhappy path
    API.getTeslaSites().then((sites) => {
      setTeslaSites(sites);
      // setTeslaSites(sites.slice(0,5));

      console.log(teslaSites);
    });
  }, []);
  
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('got position', position)
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
      setisLoading(false);
    });
  };

  const header = (<header className="App-header"></header>);
  const loadingMsg = (<p>Loading...</p>);
  // TODO nicer loading message
  // TODO handle permissions

  return (
    <div className="App">
      {header}
      {isLoading && (loadingMsg)} 
      {userLocation && (<TTMapContainer mapLocation={userLocation} teslaSites={teslaSites}/>)}
    </div>
  );
}

export default App;
