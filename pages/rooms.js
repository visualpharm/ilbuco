import Layout from '../components/Layout';
import Gallery from '../components/Gallery';
import Head from 'next/head';

export default function Rooms() {


  return (
    <Layout 
      title="Our Suites - Il Buco – Cariló"
      description="Explore our modern suites designed for comfort and productivity in Cariló's pine forest."
    >
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/photoswipe.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/photoswipe/4.1.3/default-skin/default-skin.min.css" />
      </Head>

      <header>
        <h1>Our Suites</h1>
        <p>Each of our suites is uniquely designed to provide comfort, functionality, and style for both short stays and extended remote work periods.</p>
      </header>

      <section className="col-12">
        <h2>Garden Suite with Panoramic Corner Window</h2>
        <div className="col-6">
          <ul>
            <li>Barrier-free entry, suitable for reduced mobility</li>
            <li>Corner window facing garden, dedicated entry hall</li>
            <li>Window-side dining/work table, futon for extra bed (fee)</li>
            <li>Perfect for guests who prefer ground-floor accommodation</li>
          </ul>
        </div>
        <div className="col-6">
          <Gallery galleryId="garden-suite">
            <a href="/i/paraiso/paraiso_bedroom_with_window.jpeg" data-pswp-width="1200" data-pswp-height="800">
              <img src="/i/paraiso/paraiso_bedroom_with_window.jpeg" alt="Garden Suite" width="600" className="gallery-item" />
            </a>
            <a href="/i/paraiso/paraiso_kitchen.jpeg" data-pswp-width="1200" data-pswp-height="800">
              <img src="/i/paraiso/paraiso_kitchen.jpeg" alt="Garden Suite Kitchen" width="600" className="gallery-item" />
            </a>
            <a href="/i/paraiso/paraiso_living_room_tv_sofa.jpeg" data-pswp-width="1200" data-pswp-height="800">
              <img src="/i/paraiso/paraiso_living_room_tv_sofa.jpeg" alt="Garden Suite Living Room" width="600" className="gallery-item" />
            </a>
          </Gallery>
        </div>
      </section>

      <section className="col-12">
        <h2>Forest Suite with Private Balcony</h2>
        <div className="col-6">
          <ul>
            <li>Private balcony with forest views</li>
            <li>Spacious work area with ergonomic chair</li>
            <li>Queen-size bed with premium linens</li>
            <li>En-suite bathroom with walk-in shower</li>
          </ul>
        </div>
        <div className="col-6">
          <Gallery galleryId="forest-suite">
            <a href="/i/paraiso/paraiso_bedroom_with_window.jpeg" data-pswp-width="1200" data-pswp-height="800">
              <img src="/i/paraiso/paraiso_bedroom_with_window.jpeg" alt="Forest Suite Bedroom" width="600" className="gallery-item" />
            </a>
            <a href="/i/paraiso/paraiso_kitchen.jpeg" data-pswp-width="1200" data-pswp-height="800">
              <img src="/i/paraiso/paraiso_kitchen.jpeg" alt="Forest Suite Bathroom" width="600" className="gallery-item" />
            </a>
          </Gallery>
        </div>
      </section>


    </Layout>
  );
}
