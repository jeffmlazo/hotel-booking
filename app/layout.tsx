import type { Metadata } from "next";
// import { Raleway } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";

// const raleway = Raleway({
//   variable: "--font-raleway",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Book Your Luxury Room",
  description:
    "Book now with special offer just for you today. Online Booking Hotel",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const session = await auth();
  return (
    <html lang="en">
        <SessionProvider session={session}>
          {/* <body className={`${raleway.variable} antialiased`}> */}
          <body className="antialiased">
            <Navbar />
            <main className="bg-gray-50 min-h-screen">{children}</main>
            <Footer />
          </body>
        </SessionProvider>
    </html>
  );
}
