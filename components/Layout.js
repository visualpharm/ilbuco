import Head from 'next/head';
import Navigation from './Navigation';
import Link from 'next/link';

export default function Layout({ children, title = 'Il Buco – Cariló', description = 'Ultra-modern forest retreat for long stays and remote work in Cariló' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <Navigation />
      
      <main className="main-content">
        <div className="container">
          <div className="grid">
            {children}
          </div>
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Il Buco – Cariló | <Link href="/contact">Contact Us</Link></p>
        </div>
      </footer>
    </>
  );
}
