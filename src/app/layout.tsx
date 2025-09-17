import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "@/style/style.scss"

const archivo = Archivo({
  subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "article.toba.dev",
    description: "Website for news and article."
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.className}>
          {children}
      </body>
    </html>
  );
}
