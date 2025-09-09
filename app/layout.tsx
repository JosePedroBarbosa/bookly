import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bookly — Simple Booking for Any Service",
  description: "Manage appointments, automate reminders, and grow your business — all in one easy-to-use platform.",
  keywords: ["bookly", "booking", "appointments", "reminders", "business"],
  openGraph: {
    title: "Bookly — Simple Booking for Any Service",
    description: "Manage appointments, automate reminders, and grow your business — all in one easy-to-use platform.",
    url: "https://bookly.vercel.app",
    siteName: "Bookly",
    images: [
      {
        url: "https://bookly.vercel.app/logo.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
