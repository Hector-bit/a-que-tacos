import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import HeaderMenu from "@/components/HeaderMenu";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import UIProvider from "@/context/uicontext";

const inter = Oswald({ 
  subsets: ["latin", "cyrillic"] 
});

export const metadata: Metadata = {
  title: "A Que Tacos",
  description: "Opened since 2011, locateds in whatcom county",
  icons: {
    icon: '/taco.ico', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col mx-auto max-w-[1200px] min-h-screen ${inter.className} bg-primary`}>
        <UIProvider>
          <HeaderMenu />
          <div className="grow mt-[90px] sm:mt-[140px]">
            {children}  
          </div>
          <Footer/>
        </UIProvider>
      </body>
      <GoogleAnalytics gaId='G-LTNF1EG4YR'/>
    </html>
  );
}
