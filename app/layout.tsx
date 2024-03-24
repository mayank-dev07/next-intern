import { Poppins } from "next/font/google";
import "./globals.css";

export const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} min-h-screen`}>{children}</body>
    </html>
  );
}
