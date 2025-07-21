import Link from "next/link";

import { Geist, Geist_Mono } from "next/font/google";
import { Quicksand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata = {
  title: "Statistical Sampling",
  description: "Information about and sampling from an array of probability distributions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col gap-1`}>
        <nav className={"w-full flex flex-row justify-end gap-10 text-sm"}>
          <Link href={"/"} className={"hover:underline"}>Home</Link>
          <Link href={"/dist"} className={"hover:underline"}>PDFs</Link>
          <Link href={"/sampling"} className={"hover:underline"}>Sampling tool</Link>
        </nav>
        <header className={`w-full bg-[url(./banner.jpg)] p-10`}>
          <h1 className={`${quicksand.variable} w-fit mt-10 text-4xl italic`} style={{ textShadow: "var(--outline)" }}>Statistical Sampling</h1>
        </header>
        <main className={"h-100 p-2 flex flex-col gap-5 items-stretch"}>
          {children}
        </main>
      </body>
    </html>
  );
}
