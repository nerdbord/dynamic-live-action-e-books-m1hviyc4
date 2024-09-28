"use client";

import { APIProvider } from "@vis.gl/react-google-maps";

function GoogleApiProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <APIProvider apiKey={process.env.GOOGLE_API_KEY || ""}>
      {children}
    </APIProvider>
  );
}

export default GoogleApiProvider;
