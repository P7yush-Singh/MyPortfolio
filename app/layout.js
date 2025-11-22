import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Piyush Singh | Full-Stack Developer Portfolio",
  description: "PIYUSH SINGH | Full-Stack Developer Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Piyush Singh | Full-Stack Developer Portfolio",
    description: "PIYUSH SINGH | Full-Stack Developer Portfolio",
    url: "https://piyushsingh.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
