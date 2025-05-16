import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (
    <div className="grid">
      <Head>
        <title>Il Buco – Cariló</title>
        <meta name="description" content="Ultra-modern forest retreat for long stays and remote work in Cariló" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      
      {/* Navigation will be inserted by JavaScript */}
      <nav id="navigation"></nav>

      <header>
        <h1>Ultra-modern forest retreat for long stays and remote work</h1>
        <p>Located 100 m from the beach in Cariló's pine forest. Il Buco is a modern retreat designed in 2025 by a foreign architect using suspended concrete volumes and high-performance walls. Our property offers a perfect blend of comfort, style, and functionality for both short stays and extended remote work periods.</p>
      </header>

      <section className="col-12">
        <div className="gallery">
          <a href="/i/walkaround/File%2024-04-2025,%2010%2029%2015%20PM%20(1).jpeg" data-pswp-width="1200" data-pswp-height="800" target="_blank">
            <img src="/i/walkaround/File%2024-04-2025,%2010%2029%2015%20PM%20(1).jpeg" alt="Il Buco Exterior 1" className="gallery-item" />
          </a>
          <a href="/i/walkaround/File%2024-04-2025,%2010%2029%2015%20PM%20(2)%20(1).jpeg" data-pswp-width="1200" data-pswp-height="800" target="_blank">
            <img src="/i/walkaround/File%2024-04-2025,%2010%2029%2015%20PM%20(2)%20(1).jpeg" alt="Il Buco Exterior 2" className="gallery-item" />
          </a>
          <a href="/i/walkaround/File%2024-04-2025,%2010%2034%2051%20PM%20(1)%20(1).jpeg" data-pswp-width="1200" data-pswp-height="800" target="_blank">
            <img src="/i/walkaround/File%2024-04-2025,%2010%2034%2051%20PM%20(1)%20(1).jpeg" alt="Il Buco Interior 1" className="gallery-item" />
          </a>
        </div>
      </section>

      <section className="col-6">
        <h2>Our Concept</h2>
        <p>Designed with the modern traveler in mind, Il Buco provides spacious suites with all the amenities needed for comfortable living. Each suite features high-speed internet, climate control, and fully-equipped kitchens, making it ideal for digital nomads and remote workers.</p>
      </section>

      <section className="col-6">
        <h2>Experience Cariló</h2>
        <p>Surrounded by pine forests and just steps from the beach, Il Buco offers the perfect base to explore the natural beauty and activities of Cariló. Enjoy the tranquility of the forest, the proximity to the beach, and the various recreational options available nearby.</p>
      </section>

      <section className="col-12">
        <h2>Featured Suite</h2>
        <h3>Garden Suite with Panoramic Corner Window</h3>
        <ul>
          <li>Barrier-free entry, suitable for reduced mobility</li>
          <li>Corner window facing garden, dedicated entry hall</li>
          <li>Window-side dining/work table</li>
        </ul>
        <div className="gallery">
          <a href="/i/walkaround/File%2024-04-2025,%2010%2034%2051%20PM%20(6)%20(1).jpeg" data-pswp-width="1200" data-pswp-height="800" target="_blank">
            <img src="/i/walkaround/File%2024-04-2025,%2010%2034%2051%20PM%20(6)%20(1).jpeg" alt="Garden Suite 1" className="gallery-item" />
          </a>
          <a href="/i/walkaround/File%2024-04-2025,%2010%2034%2051%20PM%20(8).jpeg" data-pswp-width="1200" data-pswp-height="800" target="_blank">
            <img src="/i/walkaround/File%2024-04-2025,%2010%2034%2051%20PM%20(8).jpeg" alt="Garden Suite 2" className="gallery-item" />
          </a>
          <a href="/i/walkaround/File%2024-04-2025,%2010%2034%2051%20PM%20(9).jpeg" data-pswp-width="1200" data-pswp-height="800" target="_blank">
            <img src="/i/walkaround/File%2024-04-2025,%2010%2034%2051%20PM%20(9).jpeg" alt="Garden Suite 3" className="gallery-item" />
          </a>
        </div>
        <p><Link href="/rooms">View all our suites →</Link></p>
      </section>

      <footer className="col-12" style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid #ccc' }}>
        <p>Il Buco – Cariló | <Link href="/contact">Contact Us</Link></p>
      </footer>

      <Script src="/js/common.js" strategy="afterInteractive" />
      <Script src="/js/gallery.js" strategy="afterInteractive" />

      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 1rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
        }
        .col-12 { grid-column: span 12; }
        .col-6 { grid-column: span 6; }
        @media (max-width: 768px) {
          .col-6 { grid-column: span 12; }
        }
        h1, h2, h3 {
          font-weight: 600;
          line-height: 1.2;
        }
        .gallery {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 20px 0;
          justify-content: flex-start;
        }
        .gallery-item {
          height: 192px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          border-radius: 4px;
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .gallery-item:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
