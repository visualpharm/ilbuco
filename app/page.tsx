import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Il Buco Forest View" 
            fill 
            priority 
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="brightness-[0.85]"
          />
        </div>
        <div className="grid-container relative z-10">
          <div className="col-span-12 md:col-span-8 lg:col-span-6 text-white">
            <h1 className="heading-xl mb-6">Il Buco</h1>
            <h2 className="heading-m mb-12">Ultra-modern forest retreat for long stays and remote work</h2>
            <Link 
              href="/#suites" 
              className="inline-block py-4 px-8 bg-accent text-white body-m hover:bg-accent/90 transition-colors"
            >
              Explore Suites
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32">
        <div className="grid-container">
          <div className="col-span-12 md:col-span-4 mb-16 md:mb-0">
            <h2 className="heading-l">A modern retreat in Cariló&apos;s pine forest</h2>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="body-l mb-8">
              Just 100m from the beach, immersed in Cariló&apos;s pine forest, Il Buco offers an exceptional environment for extended stays and remote work.
            </p>
            <p className="body-l">
              Designed in 2025 by a foreign architect with suspended concrete volumes and excellent thermal and acoustic comfort, our spaces combine modern minimalism with natural surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* Suites */}
      <section id="suites" className="py-32 bg-foreground/[0.03]">
        <div className="grid-container">
          <div className="col-span-12 mb-16">
            <h2 className="heading-l">Suites</h2>
          </div>

          {/* Suite 1 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 mb-16 md:mb-0">
            <div className="aspect-[3/4] relative mb-6 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Garden Suite" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="heading-s mb-2">Garden Suite</h3>
            <p className="body-m mb-4">Ground Floor with Panoramic Corner Window</p>
            <ul className="body-s space-y-1 mb-6 text-foreground/70">
              <li>• Barrier-free entry (no steps)</li>
              <li>• Floor-to-ceiling corner window</li>
              <li>• Dedicated entry hall</li>
            </ul>
          </div>

          {/* Suite 2 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 mb-16 md:mb-0">
            <div className="aspect-[3/4] relative mb-6 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Terrace Suite" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="heading-s mb-2">Private Terrace Suite</h3>
            <p className="body-m mb-4">With Live Plants & Open Floor Plan</p>
            <ul className="body-s space-y-1 mb-6 text-foreground/70">
              <li>• 40 m² shaded terrace</li>
              <li>• Live plants in built-in planters</li>
              <li>• Junior-suite open layout</li>
            </ul>
          </div>

          {/* Suite 3 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3 mb-16 md:mb-12 lg:mb-0">
            <div className="aspect-[3/4] relative mb-6 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Forest-View Suite" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="heading-s mb-2">Forest-View Suite</h3>
            <p className="body-m mb-4">With Separate Bedroom</p>
            <ul className="body-s space-y-1 mb-6 text-foreground/70">
              <li>• Panoramic corner window</li>
              <li>• Separate bedroom & living area</li>
              <li>• Ideal for staggered schedules</li>
            </ul>
          </div>

          {/* Suite 4 */}
          <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="aspect-[3/4] relative mb-6 overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Penthouse Suite" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h3 className="heading-s mb-2">Penthouse</h3>
            <p className="body-m mb-4">With Access to Large Sunny Terrace</p>
            <ul className="body-s space-y-1 mb-6 text-foreground/70">
              <li>• Top-floor suite</li>
              <li>• Direct access to sun-lit terrace</li>
              <li>• Option for exclusive terrace use</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32">
        <div className="grid-container">
          <div className="col-span-12 mb-16">
            <h2 className="heading-l">Features</h2>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-3 mb-16 md:mb-16 xl:mb-0">
            <h3 className="heading-s mb-4">Modern Design</h3>
            <p className="body-m text-foreground/70">
              2025 build by a foreign architect featuring suspended concrete volumes, concrete-insulation-brick wall system, and black PVC double windows for excellent thermal and acoustic comfort.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-3 mb-16 md:mb-16 xl:mb-0">
            <h3 className="heading-s mb-4">Remote Work Ready</h3>
            <p className="body-m text-foreground/70">
              500 Mbps fiber internet, mesh Wi-Fi throughout the property, and ergonomic office chairs available free for stays longer than one month.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-3 mb-16 md:mb-0">
            <h3 className="heading-s mb-4">Comfort & Quality</h3>
            <p className="body-m text-foreground/70">
              Underfloor heating and air-conditioning in every room, high-density foam mattresses with toppers, and 5-star hotel bedding. Full kitchen with quality cookware.
            </p>
          </div>

          <div className="col-span-12 md:col-span-6 xl:col-span-3">
            <h3 className="heading-s mb-4">Beach & Forest</h3>
            <p className="body-m text-foreground/70">
              Just 100 meters from the beach and immersed in Cariló&apos;s beautiful pine forest. Enjoy the perfect balance of nature and modern luxury.
            </p>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-32 bg-foreground/[0.03]">
        <div className="grid-container">
          <div className="col-span-12 lg:col-span-5 mb-16 lg:mb-0">
            <h2 className="heading-l mb-8">Location</h2>
            <p className="body-l mb-8">
              Il Buco is located in the heart of Cariló, just 100 meters from the beach and immersed in the natural pine forest.
            </p>
            <div className="mb-12">
              <h3 className="heading-s mb-4">Nearby Activities</h3>
              <ul className="space-y-2 body-m">
                <li>• Cariló Tennis Club – Clay courts, padel, football</li>
                <li>• Centro Integral de Entrenamiento – Full gym</li>
                <li>• Aire Libre, Libre – 24-hour outdoor gym</li>
                <li>• Cabalgatas Dos Montes – Horse riding</li>
                <li>• Motorrad Cariló – Quad riding and fatbike rental</li>
              </ul>
            </div>
            <div>
              <h3 className="heading-s mb-4">Dining Options</h3>
              <ul className="space-y-2 body-m">
                <li>• La Cabrera – Premium parrilla with extras</li>
                <li>• Il Gatto Nero – Award-winning Napoletan pizza</li>
                <li>• Panettone – Great coffee and baked goods</li>
                <li>• Enri&apos;s Cariló – Best burgers in town</li>
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <div className="aspect-square relative">
              <Image 
                src="https://images.unsplash.com/photo-1581915042771-5b70f9b78695?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Cariló Map" 
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="grid-container">
          <div className="col-span-12 mb-16">
            <h2 className="heading-l">Contact</h2>
          </div>
          <div className="col-span-12 md:col-span-6 mb-16 md:mb-0">
            <h3 className="heading-s mb-4">Get in Touch</h3>
            <p className="body-l mb-8">
              For booking inquiries or questions, please contact us directly.  
            </p>
            <a href="tel:+5491121275492" className="block body-l mb-3 hover:text-accent transition-colors">
              +54 11 2127 5492
            </a>
            <a href="mailto:hi@ilbuco.com.ar" className="block body-l hover:text-accent transition-colors">
              hi@ilbuco.com.ar
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8">
            <h3 className="heading-s mb-4">Policies</h3>
            <ul className="space-y-3 body-m text-foreground/80">
              <li>• Pets welcome (cleaning fee + deposit)</li>
              <li>• No parties or unregistered visitors (message us for exceptions)</li>
              <li>• Premises protected by people-counting cameras and noise-level alarms in shared zones</li>
              <li>• Twin beds available on request</li>
              <li>• Ergonomic office chair free for stays &gt; 1 month</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
