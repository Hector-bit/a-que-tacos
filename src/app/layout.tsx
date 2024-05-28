import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import AsideMenu from "@/components/AsideMenu";

const inter = Oswald({ 
  subsets: ["latin", "cyrillic"] 
});

export const metadata: Metadata = {
  title: "A Que Tacos",
  description: "Opened since 2011, located in Bellingham WA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary`}>
        <AsideMenu/>
        <div className="relative mt-40">
          {children}
        </div>
      </body>
    </html>
  );
}
