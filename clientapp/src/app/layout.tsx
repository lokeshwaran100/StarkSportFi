import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import { StarknetProvider } from "@/components/starknet-provider";
import "./globals.css";
import {Navbar} from "@/components/Shared/navbar/Navbar";
import Footer from "@/components/Shared/footer/Footer";
import { AthleteContextProvider } from "../../context/AthleteContext";
import { UserContextProvider } from "../../context/UserContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        <StarknetProvider>
          <AthleteContextProvider>
            <UserContextProvider>
              <Navbar />
              {children}
              <Footer />
            </UserContextProvider>
          </AthleteContextProvider>
        </StarknetProvider>
      </body>
    </html>
  );
}
