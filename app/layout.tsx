import "./globals.css";

import Footer from "@/components/layouts/footer";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@/components/layouts/navbar";
import Provider from "./providers";
import { cn } from "@/lib/cn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Papos",
  description: "Papos dans l'anonymat",
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
          <main>{children}</main>
          <Footer/>
        </body>
      </Provider>
    </html>
  );
}
