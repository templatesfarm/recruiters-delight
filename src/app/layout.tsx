"use client";

import "./globals.css";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { AuthProvider } from "portfolioui";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <ThemeProvider
          attribute="class"
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange
        >
          <AuthProvider
            accessKeyFromProject={
              process.env.NEXT_PUBLIC_PORTFOLIO_ACCESS_KEY ?? ""
            }
          >
            <main className="bg-white dark:bg-black text-foreground">
              {children}
            </main>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
