import { useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function Location() {
  useEffect(() => {
    // Load Leaflet map if window is available (client-side)
    if (typeof window !== 'undefined') {
      const L = require('leaflet');
      
      const map = L.map('map').setView([-37.1652, -56.8986], 14);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      
      L.marker([-37.1652, -56.8986]).addTo(map)
        .bindPopup('Il Buco Cariló')
        .openPopup();
      
      return () => {
        map.remove();
      };
    }
  }, []);

  return (
    <Layout 
      title="Location - Il Buco – Cariló"
      description="Find your way to our beautiful retreat in Cariló, just steps from the beach."
    >
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
      </Head>

      <header>
        <h1>Our Location</h1>
        <p>Il Buco is located in the heart of Cariló's pine forest, just 100 meters from the beach.</p>
      </header>

      <section className="col-6">
        <h2>Getting Here</h2>
        <h3>By Car</h3>
        <p>From Buenos Aires, take Route 2 to km 360. Follow signs to Cariló. We're located at:</p>
        <address>
          Il Buco<br />
          Calle Los Pinos 1234<br />
          Cariló, Buenos Aires<br />
          Argentina
        </address>
        
        <h3>By Bus</h3>
        <p>Buses from Buenos Aires to Pinamar stop at the Cariló terminal. We can arrange a pick-up service from there.</p>
      </section>

      <section className="col-6">
        <div id="map" style={{ height: '400px', width: '100%' }}></div>
      </section>

      <section className="col-12">
        <h2>Nearby Attractions</h2>
        <div className="col-4">
          <h3>Beach</h3>
          <p>100m away</p>
        </div>
        <div className="col-4">
          <h3>Downtown</h3>
          <p>1.5km away</p>
        </div>
        <div className="col-4">
          <h3>Golf Club</h3>
          <p>2km away</p>
        </div>
      </section>
    </Layout>
  );
}
