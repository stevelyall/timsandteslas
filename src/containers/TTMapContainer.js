import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import TTTileLayer from "../components/TTTileLayer";
import MapViewLocation from "../components/MapViewLocation";

// TODO Typescript? npm install -D @types/leaflet

export default function TTMapContainer({ mapLocation }) {
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
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </React.Fragment>
  );
}
