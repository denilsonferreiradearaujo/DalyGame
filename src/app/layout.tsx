import "./globals.css";
import type { Metadata } from "next";
// import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Inter } from "next/font/google";
import { Header } from '@/components/header'

const inter = Inter({ subsets: ['latin'] })

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Daly Games - Descubra jogos incríveis para sua diversão",
  description: "Mais de 10mil jogos separados e organizados",
  keywords: ['games','jogos','steams'],
  openGraph: {
    images: [`${process.env.PROJECT_URL}/preview.png`]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }

};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
