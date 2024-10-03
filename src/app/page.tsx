import StepNavigator from "./components/StepNavigator/StepNavigator"
import { APIProvider } from "@vis.gl/react-google-maps";

export default function Home(): JSX.Element {
  return (
    <APIProvider apiKey={"AIzaSyCvvlLvJ8yDgKup6hw6jPtHn3JGWJdS6sQ"}>
      <StepNavigator />
    </APIProvider>
  );
}
