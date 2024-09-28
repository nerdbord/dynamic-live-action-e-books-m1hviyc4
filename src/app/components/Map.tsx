"use client";

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

function MapComponent() {
  const position = { lat: 53.54992, lng: 10.00678 };

  return (
    <APIProvider apiKey={process.env.GOOGLE_API_KEY || ""}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <AdvancedMarker position={position} />
      </Map>
    </APIProvider>
  );
}

export default MapComponent;
