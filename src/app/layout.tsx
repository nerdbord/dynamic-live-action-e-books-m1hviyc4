import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "AI Tour Guide",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div
         >
          {children}
        </div>
      </body>
    </html>
  );
}
