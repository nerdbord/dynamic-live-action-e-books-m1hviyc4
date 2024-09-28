"use client";

import { APIProvider, APIProviderContext, useApiIsLoaded } from "@vis.gl/react-google-maps";
import MapComponent from "../components/MapComponent";

export default function Map() {
  return (
    <main>
      <APIProvider apiKey={"AIzaSyCvvlLvJ8yDgKup6hw6jPtHn3JGWJdS6sQ"}>
        <MapComponent />
      </APIProvider>
    </main>
  );
}
