// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import TTMap from './components/TTMap';


function App() {
  
  const [userLocation, setUserLocation] = useState(undefined);
  const [isLoading, setisLoading] = useState(true);

  // load location when app loads
  useEffect(() => {
    getUserLocation();
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
      {userLocation && (<TTMap mapLocation={userLocation}/>)}
    </div>
  );
}

export default App;
