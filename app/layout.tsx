import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "شلاظة نيسواز مغربية - صحية و بنينة",
  description: "شلاظة نيسواز مغربية، صحية، بنينة و واجدة فثواني!",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
