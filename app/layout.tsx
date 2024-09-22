import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import localFont from 'next/font/local'

import "./globals.css";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

const atkinson = localFont({
  src: '../assets/Atkinson-Hyperlegible-Regular-102a.woff2',
  display: 'swap',
  weight: '400',
  variable: "--font-atkinson"
})


import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Welcome to ToDo",
  description: "simple todo app with sqlite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={atkinson.variable}>
      <body className={cn("font-sans", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
