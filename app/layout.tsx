import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({ subsets: ["latin"] , weight: "400"});

export const metadata: Metadata = {
  title: "Steganography",
  description: "Steganography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <Toaster position="top-right"/>
        {children}
      </body>
    </html>
  );
}
