import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import { StoreProvider } from "@/app/store";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  axes: ["opsz"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Payroll SaaS",
  description: "Payroll management platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <StoreProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
