import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Il Buco | Modern Forest Retreat in Cariló",
  description: "Ultra-modern forest retreat for long stays and remote work in Cariló, Argentina.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <header className="bg-white shadow-sm py-4">
          <div className="container flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Il Buco</Link>
            <nav className="flex gap-6">
              <Link href="/#suites" className="hover:text-accent">Suites</Link>
              <Link href="/#features" className="hover:text-accent">Features</Link>
              <Link href="/#location" className="hover:text-accent">Location</Link>
              <Link href="/#contact" className="hover:text-accent">Contact</Link>
            </nav>
          </div>
        </header>
        <main>
          {children}
        </main>
        <footer className="border-t py-8 mt-16">
          <div className="container">
            <div className="flex flex-wrap gap-8 mb-8">
              <div className="w-full md:w-1/4">
                <div className="text-xl font-bold mb-2">Il Buco</div>
                <p className="text-gray-600">Modern forest retreat in Cariló</p>
              </div>
              <div className="w-full md:w-1/4">
                <div className="font-bold mb-2">Contact</div>
                <a href="tel:+5491121275492" className="block hover:text-accent mb-1">+54 11 2127 5492</a>
                <a href="mailto:hi@ilbuco.com.ar" className="block hover:text-accent">hi@ilbuco.com.ar</a>
              </div>
              <div className="w-full md:w-1/4">
                <div className="font-bold mb-2">Links</div>
                <Link href="/#suites" className="block hover:text-accent mb-1">Suites</Link>
                <Link href="/#features" className="block hover:text-accent mb-1">Features</Link>
                <Link href="/#location" className="block hover:text-accent mb-1">Location</Link>
              </div>
              <div className="w-full md:w-1/4">
                <div className="font-bold mb-2">Legal</div>
                <Link href="/privacy" className="block hover:text-accent mb-1">Privacy Policy</Link>
                <Link href="/terms" className="block hover:text-accent mb-1">Terms of Service</Link>
              </div>
            </div>
            <div className="text-center text-sm text-gray-500 pt-4 border-t">
              © {new Date().getFullYear()} Il Buco. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
