import type { Metadata } from "next";
import { Varela_Round} from 'next/font/google'
import "./globals.css";
import Nav from "@/components/Nav";

const varela_round = Varela_Round({
  weight: '400',
  subsets: ['hebrew'],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={varela_round.className}>
        <Nav/>
        {children}</body>
    </html>
  );
}
