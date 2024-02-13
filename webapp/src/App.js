// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import TTMapContainer from './containers/TTMapContainer.js';
import SiteDataService from './api/SiteDataService.ts';
import { MockDataSource } from './api/mock-data/MockDataSource.ts';

const service = new SiteDataService(new MockDataSource());

function App() {

  const [userLocation, setUserLocation] = useState(undefined);
  // TODO is this needed here?
  const [mapBounds, setMapBounds] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [teslaSites, setTeslaSites] = useState(undefined);
  const [timsSites, setTimsSites] = useState(undefined);

  // load location when app loads
  useEffect(() => {
    console.log('location and apis effect')
    
    getUserLocation();
    
    // TODO handle API unhappy paths
    service.getTeslaSites().then((sites) => {
      setTeslaSites(sites);
      console.log(sites);
    });

    service.getTimsSites().then((sites) => {
      setTimsSites(sites);
      console.log(sites);
    });
  }, []);

  // TODO this runs too many times
  // TODO is this needed?
  const mapBoundsChangedHandler = (bounds, center) => {
    console.log("bounds", bounds);
    setMapBounds(bounds)
    // console.log("center", center); // TODO is center needed?
  };

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('got position', position)
      setUserLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
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
      {userLocation && (
        <TTMapContainer 
          mapLocation={userLocation}
          teslaSites={teslaSites}
          timsSites={timsSites}
          boundsChangedHandler={mapBoundsChangedHandler}
        />
      )}
    </div>
  );
}

export default App;
