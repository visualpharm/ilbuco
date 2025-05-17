import Layout from '../components/Layout';
import Head from 'next/head';

export default function Activities() {
  return (
    <Layout 
      title="Activities - Il Buco – Cariló"
      description="Discover the best activities and experiences in and around Cariló."
    >
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
      </Head>

      <header>
        <h1>Activities in Cariló</h1>
        <p>Experience the best of Cariló with our selection of activities and attractions.</p>
      </header>

      <section className="col-6">
        <h2>Beach Activities</h2>
        <ul>
          <li>Swimming in the Atlantic Ocean</li>
          <li>Beach volleyball</li>
          <li>Surfing and paddleboarding</li>
          <li>Beachfront dining</li>
        </ul>
      </section>

      <section className="col-6">
        <h2>Nature & Adventure</h2>
        <ul>
          <li>Hiking in the pine forest</li>
          <li>Bike tours</li>
          <li>Bird watching</li>
          <li>Horseback riding</li>
        </ul>
      </section>

      <section className="col-12">
        <h2>Local Attractions</h2>
        <div className="col-4">
          <h3>Golf</h3>
          <p>Play a round at the nearby Cariló Golf Club.</p>
        </div>
        <div className="col-4">
          <h3>Shopping</h3>
          <p>Explore local boutiques and artisan shops.</p>
        </div>
        <div className="col-4">
          <h3>Dining</h3>
          <p>Experience the local cuisine at top-rated restaurants.</p>
        </div>
      </section>
    </Layout>
  );
}
