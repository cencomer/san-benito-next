import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeWrapper from "@/components/ThemeWrapper";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Novena de San Benito - Oración y Protección Espiritual",
  description: "Aplicación para seguir la novena de protección espiritual con la medalla de San Benito",
  keywords: "san benito, novena, oración, protección espiritual, medalla",
  openGraph: {
    title: "Novena de San Benito",
    description: "Sigue la novena de protección espiritual con la medalla de San Benito",
    url: "https://sanbenito.app",
    siteName: "San Benito",
    images: [
      {
        url: "https://sanbenito.app/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novena de San Benito",
    description: "Sigue la novena de protección espiritual con la medalla de San Benito",
    images: ["https://sanbenito.app/og-image.jpg"],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <ThemeWrapper>
            <Navbar />
            <main className="min-h-[calc(100vh-64px)] pt-16">
              {children}
            </main>
            <Footer />
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
