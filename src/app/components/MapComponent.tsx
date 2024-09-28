"use client";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Marker,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

function MapComponent() {
  const [placesList, setPlacesList] = useState();

  const map = useMap();
  const placesLib = useMapsLibrary("places");

  const request = {
    location: { lat: 50.068092184059694, lng: 19.989940367583007 },
    radius: 1000,
  };

  useEffect(() => {
    if (!placesLib || !map) return;

    const svc = new placesLib.PlacesService(map);
    svc.nearbySearch(request, (a, b, c) => {
      a && setPlacesList(a);
    });
  }, [placesLib, map]);

  useEffect(() => {
    // createPlacesMarkers()
  }, [placesList])

  console.log("list", placesList);

  return (
    <Map
      style={{ width: "100%", height: "100vh" }}
      defaultCenter={{ lat: 50.068092184059694, lng: 19.989940367583007 }}
      defaultZoom={15}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      {placesList && placesList.map(place => {

        return (<Marker position={place.geometry.location}/>)
      })}
    </Map>
  );
}

export default MapComponent;
