import Navbar from "@/components/modules/Navbar";
import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fa" dir="rtl">
      <body className={`font-dana bg-gray-100 antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
