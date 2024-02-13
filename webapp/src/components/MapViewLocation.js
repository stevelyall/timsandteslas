import { useMap } from "react-leaflet/hooks";
import { useEffect } from "react";

// Gets bounds and center of the map when moved. 
// Leaflet requires useMap() to be used in a child of the MapContainer
export default function MapLocation ({boundsChangedHandler}) {
    const map = useMap();
  
    useEffect(() => {
      // console.log(map)
      if (!map) return;
  
      map.on('moveend zoomend', () => {
        const bounds = map.getBounds();
        boundsChangedHandler(bounds, map.getCenter());
      });
    }, [boundsChangedHandler, map])

  }