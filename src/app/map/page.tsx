import MapComponent from "../components/MapComponent";
import GoogleApiProvider from "../providers/GoogleApiProvider";

export default function Map() {
  return (
    <main>
      <GoogleApiProvider>
        <MapComponent />
      </GoogleApiProvider>
    </main>
  );
}
