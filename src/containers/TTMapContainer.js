import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import TTTileLayer from "../components/TTTileLayer";
import MapViewLocation from "../components/MapViewLocation";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
// TODO Typescript? npm install -D @types/leaflet
import timsIcon from '../img/icons8-coffee-cup-100.png';
import teslaIcon from '../img/icons8-lightning-bolt-100.png';


// TODO attributrion <a target="_blank" href="https://icons8.com/icon/9726/cup">Coffee Cup</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
const timsSiteIcon = new L.icon({
  iconUrl: timsIcon,
  iconSize: [50,50]
});

const TimsSiteMarker = ({ site }) => {
  return (
    <Marker position={[site.lat, site.long]} key={site.id} icon={timsSiteIcon} riseOnHover>
      <Popup key={site.id}>
        <h3>{site.name}</h3>
        <p>
          {site.address.street}
          <br />
          {site.address.city}, {site.address.province},{" "}
          {site.address.postalCode}
        </p>
        <p>{site.hasDriveThru ? <span>Has Drive Thru</span> : ''}</p>
        <p>{site.hasDineIn ? <span>Has Dine In</span> : ''}</p>
        {/* <p>Closest Supercharger: </p> TODO Teslas */}
      </Popup>
    </Marker>
  );
};

// TODO attributrions <a target="_blank" href="https://icons8.com/icon/60998/lightning-bolt">Lightning Bolt</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
const teslaSiteIcon = new L.icon({
  iconUrl: teslaIcon,
  iconSize: [50,50]
});

const TeslaSiteMarker = ({ site }) => {
  return (
    <Marker 
      position={[site.lat, site.long]}
      key={site.id}
      icon={teslaSiteIcon}
      riseOnHover
      title={site.name}
    >
      <Popup key={site.id}>
        <h3>{site.name}</h3>
        <p>
          {site.address.street}
          <br />
          {site.address.city}, {site.address.province},{" "}
          {site.address.postalCode}
        </p>
        <p>Power: {site.power} kW</p>
        <p># of Stalls: {site.stallCount}</p>
        {/* <p>Closest Tims: </p> TODO tims */}
      </Popup>
    </Marker>
  );
};

// TODO MarkerClusterGroup?
// TODO load sites based on location?
export default function TTMapContainer(
  { mapLocation, 
    teslaSites, 
    timsSites,
    boundsChangedHandler
   }) {
  const mapStyles = {
    width: "100vw",
    height: "90vh",
  };

  return (
    <React.Fragment>
      <MapContainer
        style={mapStyles}
        center={{ lat: mapLocation.lat, lng: mapLocation.lng }} //[location.lat, location.long]
        zoom={9}
        scrollWheelZoom={true}
      >
        <TTTileLayer />
        <MapViewLocation boundsChangedHandler={boundsChangedHandler} />

        {teslaSites &&
          teslaSites.map((site) => (
            <TeslaSiteMarker key={site.key} site={site} />
          ))}
        {/* {            console.log(timsSites)} */}
        {timsSites &&
          timsSites.map((site) => (
            <TimsSiteMarker key={site.key} site={site} />
          ))}

      </MapContainer>
    </React.Fragment>
  );
}
