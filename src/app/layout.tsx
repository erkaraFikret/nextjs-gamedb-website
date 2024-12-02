import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "The Game DB",
  description:
    "Discover and explore a vast collection of games, complete with detailed information, reviews, and updates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen bg-gray-100 dark:bg-black-1 text-dark dark:text-white">
            {/* Header */}
            <div className="flex min-h-full w-full lg:space-x-10 px-8 py-8 lg:px-20">
              {/* Sidebar */}
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
