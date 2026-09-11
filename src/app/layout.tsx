import Footer from "@/components/modules/main/Footer";
import Navbar from "@/components/modules/main/Navbar";
import AuthProvider from "@/providers/AuthProvider";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import AuthInitializer from "@/providers/AuthInitializer";

export const metadata: Metadata = {
  title: {
    template: "%s | ابزار آلات ترازو",
    default: "ابزار آلات | ترازو",
  },
  description: "...",
  icons: { icon: "/images/tool.png" },
  openGraph: { title: "ابزار آلات ترازو" },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="overflow-x-hidden select-none">
      <body className={`font-dana bg-gray-100 antialiased overflow-x-hidden`}>
        <NextTopLoader color="#eab308" showSpinner={false} />
        <SessionProvider>
          <AuthInitializer>
            <AuthProvider>
              <Navbar />
              {children}
              <Footer />
              <Toaster />
            </AuthProvider>
          </AuthInitializer>
        </SessionProvider>
      </body>
    </html>
  );
}
