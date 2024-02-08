import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Gen'Omics Research Hub",
  description: "...discovery new things, improving life",
};

export default function RootLayout({ children, title }) {
  return (
    <html lang="en" className="!scroll-smooth">
      <title>
        {title ? `${title} | Gen'Omics Research Hub` : "Gen'Omics Research Hub"}
      </title>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
