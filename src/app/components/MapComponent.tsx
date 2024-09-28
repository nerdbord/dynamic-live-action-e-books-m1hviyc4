"use client";
import { AdvancedMarker, APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import Directions from "./Directions";

function MapComponent() {

  return (
     <APIProvider apiKey={"AIzaSyCvvlLvJ8yDgKup6hw6jPtHn3JGWJdS6sQ"}>
      <Map
        style={{ width: "100%", height: "100vh" }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={false}
      >
        <Directions />
      </Map>
     </APIProvider>
  );
}

export default MapComponent;
