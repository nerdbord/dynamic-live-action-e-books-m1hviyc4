import { APIProvider } from "@vis.gl/react-google-maps";

function GoogleApiProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <APIProvider apiKey={process.env.GOOGLE_MAPS_API_KEY as string}>
      {children}
    </APIProvider>
  );
}

export default GoogleApiProvider;
