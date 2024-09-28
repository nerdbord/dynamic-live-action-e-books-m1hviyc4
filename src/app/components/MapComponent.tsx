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
  const core = useMapsLibrary("core")
  const marker = useMapsLibrary("marker")

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

  useEffect(() => {
    // createPlacesMarkers()
  }, [placesList])

  console.log("list", placesList);

  // async function createPlacesMarkers(){
  //   if (!placesList) return
  //    placesList.forEach(place => {
      
  //   });

  // }

  // if (placesList) {
  //   // const { LatLngBounds } = (await google.maps.importLibrary(
  //   //   "core"
  //   // )) as google.maps.CoreLibrary;
  //   const bounds = new core.LatLngBounds();

  //   // Loop through and get all the results.
  //   placesList.forEach((place) => {
  //     const markerView = new marker.AdvancedMarkerElement({
  //       map,
  //       position: place.location,
  //       title: place.displayName,
  //     });

  //     bounds.extend(place.location as google.maps.LatLngLiteral);
  //     console.log(place);
  //   });

  //   map.fitBounds(bounds);
  // } else {
  //   console.log("No results");
  // }

  return (
    <Map
      style={{ width: "100%", height: "100vh" }}
      defaultCenter={{ lat: 50.068092184059694, lng: 19.989940367583007 }}
      defaultZoom={3}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      {placesList.map(place => {

        return (<Marker position={place.geometry.location}/>)
      })}
    </Map>
  );
}

export default MapComponent;
