import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faisal Bahari",
  description: "Faisal Bahari Portfolio's",
  icons: {
    icon: "/faisallbhr.png"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full bg-black bg-dot-white/20 text-white font-medium relative`}>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center md:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {children}
      </body>
    </html>
  );
}
