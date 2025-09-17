import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "@/style/style.scss"

const archivo = Archivo({
  subsets: ["latin"]
})

export const metadata: Metadata = {
    title: "hometest_frontend",
    description: "An interview test for frontend dev job."
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
