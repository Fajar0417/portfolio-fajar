import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree, Sora, } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

import { SidebarMenu } from "@/components/layout/sidebar-menu";
import { DesktopSidebar } from "@/components/layout/desktop-sidebar";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fajar Ferdiansyah",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
  className={`${figtree.variable} ${sora.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {/* ========== MOBILE ========== */}
          <div className="lg:hidden">
            <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
              <div className="flex items-center justify-between px-6 py-4">
                <span className="text-lg font-semibold">
                  Fajar Ferdiansyah
                </span>

                <SidebarMenu />
              </div>
            </header>

            <main>{children}</main>
          </div>

          {/* ========== DESKTOP ========== */}
          <div className="hidden lg:grid lg:grid-cols-[300px_1fr] min-h-screen">
            <DesktopSidebar />

            <main className="overflow-y-auto">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}