import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import TTTileLayer from "../components/TTTileLayer";
import MapViewLocation from "../components/MapViewLocation";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
// TODO Typescript? npm install -D @types/leaflet
import teslaIcon from '../icons8-lightning-bolt-30.png';

// TODO attributrions <a target="_blank" href="https://icons8.com/icon/60998/lightning-bolt">Lightning Bolt</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
const teslaSiteIcon = new L.icon({
  iconUrl: teslaIcon
});

const TeslaSiteMarker = ({ site }) => {
  return (
    <Marker position={[site.lat, site.long]} key={site.id} icon={teslaSiteIcon}>
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
        <p>Closest Tims: </p> {/* TODO tims */}
      </Popup>
    </Marker>
  );
};

// TODO MarkerClusterGroup?
// TODO load sites based on location?
export default function TTMapContainer({ mapLocation, teslaSites }) {
  const mapStyles = {
    width: "100vw",
    height: "90vh",
  };

  const boundsChangedHandler = (bounds, center) => {
    console.log("bounds", bounds);
    console.log("center", center);
  };

  return (
    <React.Fragment>
      <MapContainer
        style={mapStyles}
        center={{ lat: mapLocation.lat, lng: mapLocation.lng }} //[location.lat, location.long]
        zoom={13}
        scrollWheelZoom={true}
      >
        <TTTileLayer />
        <MapViewLocation boundsChangedHandler={boundsChangedHandler} />

        {teslaSites &&
          teslaSites.map((site) => (
            <TeslaSiteMarker key={site.key} site={site} />
          ))}
      </MapContainer>
    </React.Fragment>
  );
}
