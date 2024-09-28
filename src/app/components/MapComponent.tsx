"use client";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Marker,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import Directions from "./Directions";
import { useEffect, useState } from "react";

function MapComponent() {
  const [placesList, setPlacesList] = useState();

  const map = useMap();
  const placesLib = useMapsLibrary("places");

  const request = {
    location: { lat: 50.068092184059694, lng: 19.989940367583007 },
    radius: 500,
  };

  useEffect(() => {
    if (!placesLib || !map) return;

    const svc = new placesLib.PlacesService(map);
    svc.nearbySearch(request, (a, b, c) => {
      a && setPlacesList(a);
    });
    
  }, [placesLib, map]);


  console.log("list",placesList);
  
  return (
    <Map
      style={{ width: "100%", height: "50vh" }}
      defaultCenter={{ lat: 50.068092184059694, lng: 19.989940367583007 }}
      defaultZoom={3}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      {/* <Directions /> */}
    </Map>
  );
}

export default MapComponent;
