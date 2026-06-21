import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-space"
});

export const metadata: Metadata = {
  title: "Scriptifydevs",
  description: "pakistan 1st markeet palce for code and automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-[#0a0a0a]`}>
        <StoreProvider>
          <Navbar />
          <div className="pt-[60px]">
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
