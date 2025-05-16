import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

// This is a static export version that works with `next export`
export default function Home() {
  // For static exports, we'll use a meta refresh tag
  return (
    <div className="container">
      <Head>
        <title>Il Buco - Redirecting</title>
        <meta name="description" content="Il Buco - Restaurant" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="refresh" content={`0;url=/rooms/index.html`} />
      </Head>
      <main>
        <h1>Redirecting to rooms...</h1>
        <p>If you are not redirected automatically, <a href="/rooms/index.html">click here</a>.</p>
      </main>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 2rem;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
