import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quran & Bible Generator",
  description: "Random generation of Quran  Verse and Bible Verse for uses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7129018346117539" crossorigin="anonymous"></script>
        <meta name="google-adsense-account" content="ca-pub-7129018346117539"></meta>
      </head>
       
       <body className={inter.className}>{children}</body>
      
    </html>
  );
}
