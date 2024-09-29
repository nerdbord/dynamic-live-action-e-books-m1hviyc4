"use client";
import {
  Map,
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";
// import Directions from "../Directions/Directions";

function MapComponent() {
  const [placesList, setPlacesList] = useState<google.maps.places.PlaceResult[] | null>(null);
  const map = useMap();
  const placesLib = useMapsLibrary("places");

  // Zaktualizowany promień wyszukiwania do 3 km
  const request = {
    location: { lat: 50.068092184059694, lng: 19.989940367583007 },
    radius: 3000, // 3 km
  };

  useEffect(() => {
    if (!placesLib || !map) return;

    const svc = new placesLib.PlacesService(map);
    svc.nearbySearch(request, (results, status) => {
      if (status === placesLib.PlacesServiceStatus.OK && results) {
        setPlacesList(results);

        const bounds = new window.google.maps.LatLngBounds();
        results?.forEach((place) => {
          if (place.geometry?.location) {
            bounds.extend(place.geometry.location);
          }
        });

        map.fitBounds(bounds);
      } else {
        setPlacesList([]);
      }
    });
  }, [placesLib, map]);

  console.log("list", placesList);

  return (
    <Map
      style={{ width: "100%", height: "180px" }}
      defaultCenter={{ lat: 50.068092184059694, lng: 19.989940367583007 }}
      defaultZoom={15}
      gestureHandling={"greedy"}
      disableDefaultUI={true}
    >
      {/* {placesList && placesList.length > 0 && <Directions places={placesList.slice(0, 6)} />} */}
    </Map>
  );
}

export default MapComponent;
