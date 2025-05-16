import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Il Buco</title>
        <meta name="description" content="Il Buco - Restaurant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Il Buco</h1>
        <p>Website coming soon...</p>
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
