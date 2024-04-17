import "./globals.css";

import type { Metadata, Viewport } from "next";

import Footer from "@/components/layouts/footer";
import Navbar from "@/components/layouts/navbar";
import { cn } from "@/lib/cn";
import { Inter } from "next/font/google";
import Provider from "./providers";

const inter = Inter({ subsets: ["latin"] });


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-visual',
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(30,100%, 98%)" },
    { media: "(prefers-color-scheme: dark)", color: "hsl(224, 63%, 26%)" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEBSITE_URL}`),
  title: "Papos",
  description: "Partagez ce qui vous préoccupe et ce que vous ressentez de manière sécurisée et anonyme.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Papos",
    card: "summary_large_image",
    creator: "@ouestlabs",
  },
  creator: "Ouest Labs",
  authors: [
    {
      name: "Ouest Labs",
      url: "https://ouestlab.tech",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={cn(inter.className, "bg-background")}>
          <Navbar/>
          <main className="fixed top-[87px] w-dvw h-[calc(100vh-168.5px)] overflow-y-auto" >{children}</main>
          <Footer/>
        </body>
      </Provider>
    </html>
  );
}
