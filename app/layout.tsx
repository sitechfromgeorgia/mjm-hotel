import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "მჯმ ჰოტელი — სასტუმრო ქობულეთში | 60₾-დან",
  description: "25 ოთახი, 70 საწოლი ქობულეთის ცენტრში. დაჯავშნე პირდაპირ WhatsApp-ით. საოჯახო სასტუმრო ზღვასთან.",
  keywords: "სასტუმრო ქობულეთში, საოჯახო სასტუმრო, იაფი სასტუმრო ქობულეთში, მჯმ ჰოტელი, ქობულეთი სასტუმრო",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
