import Navbar from "@/components/modules/main/Navbar";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/modules/main/Footer";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title: {
    template: "%s | ابزار آلات ترازو",
    default: "ابزار آلات | ترازو",
  },
  description:
    "سایت ابزار آلات میلاد مکانی برای خرید انواع ابزار های صنعتی و خانگی میباشد ، در این سایت شما امکان خرید انواع دریل ، هیلتی و... را در دارید",
  icons: {
    icon: "/images/tool.png",
  },
  openGraph: {
    title: "ابزار آلات ترازو",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="overflow-x-hidden select-none">
      <body className={`font-dana bg-gray-100 antialiased overflow-x-hidden`}>
        <NextTopLoader color="#eab308" showSpinner={false} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
