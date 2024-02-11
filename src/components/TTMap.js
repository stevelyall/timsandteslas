import React from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet/Marker";
import { Popup } from "react-leaflet/Popup";

import { useMap } from "react-leaflet/hooks";

// TODO Typescript? npm install -D @types/leaflet

export default function TTMap({mapLocation}) {
  const mapStyles = {
    width: "100vw",
    height: "90vh",
  };

  return (
    <React.Fragment>
      <MapContainer
        style={mapStyles}
        center={{lat: mapLocation.lat, lng: mapLocation.lng}} //[location.lat, location.long]
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      {/* </div> */}
    </React.Fragment>
  );
}
