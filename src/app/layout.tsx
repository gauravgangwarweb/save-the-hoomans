import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./ui/Footer";
import NavBar from "./ui/NavBar";
import ViewportControl from "./components/ViewportControl";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Save The Hoomans",
  description: "Safe guarding the lives of animals in need",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  },
  other: {
    'viewport-fit': 'cover',
    'content-scale': 'device-width'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta content="true" name="HandheldFriendly" />
        <meta name="MobileOptimized" content="width" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[100vw] overflow-x-hidden`}>
        <ViewportControl />
        <NavBar />
        <div className="w-full overflow-x-hidden">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
