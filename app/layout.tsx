import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
} from "@clerk/nextjs";
import { ThemeProvider } from "../components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import NavbarHome from "@/components/ui/NavbarHome/NavbarHome";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppDashboard",
  description: "Generated by create next app",
  icons: "../Logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="w-full h-full">{children}</div>
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
