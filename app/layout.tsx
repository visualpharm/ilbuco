import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Il Buco | Modern Forest Retreat in Cariló",
  description: "Ultra-modern forest retreat for long stays and remote work in Cariló, Argentina. 100m from beach, exceptional design, high-speed internet.",
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
      >
        <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-foreground/10 py-4">
          <nav className="grid-container">
            <div className="col-span-2">
              <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-accent transition-colors">
                Il Buco
              </Link>
            </div>
            <div className="col-span-10 flex justify-end gap-8 items-center">
              <Link href="/#suites" className="body-m hover:text-accent transition-colors">Suites</Link>
              <Link href="/#features" className="body-m hover:text-accent transition-colors">Features</Link>
              <Link href="/#location" className="body-m hover:text-accent transition-colors">Location</Link>
              <Link href="/#contact" className="body-m hover:text-accent transition-colors">Contact</Link>
            </div>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className="border-t border-foreground/10 py-16 mt-32">
          <div className="grid-container">
            <div className="col-span-3">
              <div className="text-2xl font-bold tracking-tighter mb-4">Il Buco</div>
              <p className="body-m text-foreground/70">Modern forest retreat in Cariló, Argentina</p>
            </div>
            <div className="col-span-3">
              <div className="heading-s mb-4">Contact</div>
              <a href="tel:+5491121275492" className="block body-m hover:text-accent transition-colors mb-2">+54 11 2127 5492</a>
              <a href="mailto:hi@ilbuco.com.ar" className="block body-m hover:text-accent transition-colors">hi@ilbuco.com.ar</a>
            </div>
            <div className="col-span-3">
              <div className="heading-s mb-4">Links</div>
              <Link href="/#suites" className="block body-m hover:text-accent transition-colors mb-2">Suites</Link>
              <Link href="/#features" className="block body-m hover:text-accent transition-colors mb-2">Features</Link>
              <Link href="/#location" className="block body-m hover:text-accent transition-colors mb-2">Location</Link>
            </div>
            <div className="col-span-3">
              <div className="heading-s mb-4">Legal</div>
              <Link href="/privacy" className="block body-m hover:text-accent transition-colors mb-2">Privacy Policy</Link>
              <Link href="/terms" className="block body-m hover:text-accent transition-colors mb-2">Terms of Service</Link>
            </div>
            <div className="col-span-12 mt-16 pt-8 border-t border-foreground/10 text-center body-s text-foreground/50">
              © {new Date().getFullYear()} Il Buco. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
