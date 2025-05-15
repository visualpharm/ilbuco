import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Il Buco Forest View" 
            fill 
            priority 
            style={{ objectFit: 'cover' }}
            className="brightness-90"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-lg text-white">
            <h1 className="text-5xl font-bold mb-4">Il Buco</h1>
            <h2 className="text-2xl mb-8">Modern forest retreat for long stays and remote work</h2>
            <Link 
              href="/#suites" 
              className="inline-block py-3 px-6 bg-accent text-white hover:bg-opacity-90"
            >
              Explore Suites
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold">A modern retreat in Cariló&apos;s pine forest</h2>
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg mb-4">
                Just 100m from the beach, immersed in Cariló&apos;s pine forest, Il Buco offers an exceptional environment for extended stays and remote work.
              </p>
              <p className="text-lg">
                Designed in 2025 by a foreign architect with suspended concrete volumes and excellent thermal and acoustic comfort, our spaces combine modern minimalism with natural surroundings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Suites */}
      <section id="suites" className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Suites</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Suite 1 */}
            <div className="mb-8">
              <div className="relative h-64 mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Garden Suite" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Garden Suite</h3>
              <p className="mb-2">Ground Floor with Panoramic Corner Window</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Barrier-free entry (no steps)</li>
                <li>• Floor-to-ceiling corner window</li>
                <li>• Dedicated entry hall</li>
              </ul>
            </div>

            {/* Suite 2 */}
            <div className="mb-8">
              <div className="relative h-64 mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Terrace Suite" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Private Terrace Suite</h3>
              <p className="mb-2">With Live Plants & Open Floor Plan</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 40 m² shaded terrace</li>
                <li>• Live plants in built-in planters</li>
                <li>• Junior-suite open layout</li>
              </ul>
            </div>

            {/* Suite 3 */}
            <div className="mb-8">
              <div className="relative h-64 mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Forest-View Suite" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Forest-View Suite</h3>
              <p className="mb-2">With Separate Bedroom</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Panoramic corner window</li>
                <li>• Separate bedroom & living area</li>
                <li>• Ideal for staggered schedules</li>
              </ul>
            </div>

            {/* Suite 4 */}
            <div className="mb-8">
              <div className="relative h-64 mb-4">
                <Image 
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Penthouse Suite" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Penthouse</h3>
              <p className="mb-2">With Access to Large Sunny Terrace</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Top-floor suite</li>
                <li>• Direct access to sun-lit terrace</li>
                <li>• Option for exclusive terrace use</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Modern Design</h3>
              <p className="text-gray-600">
                2025 build featuring suspended concrete volumes and black PVC double windows for excellent thermal and acoustic comfort.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Remote Work Ready</h3>
              <p className="text-gray-600">
                500 Mbps fiber internet, mesh Wi-Fi throughout the property, and ergonomic office chairs for long stays.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Comfort & Quality</h3>
              <p className="text-gray-600">
                Underfloor heating, air-conditioning, high-density foam mattresses, and 5-star hotel bedding. Full kitchen with quality cookware.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-2">Beach & Forest</h3>
              <p className="text-gray-600">
                Just 100 meters from the beach and immersed in Cariló&apos;s beautiful pine forest. Enjoy nature and modern luxury.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Location</h2>
              <p className="text-lg mb-6">
                Il Buco is located in the heart of Cariló, just 100 meters from the beach and immersed in the natural pine forest.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Nearby Activities</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Cariló Tennis Club – Clay courts and padel</li>
                  <li>• Centro Integral de Entrenamiento – Full gym</li>
                  <li>• Cabalgatas Dos Montes – Horse riding</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Dining Options</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• La Cabrera – Premium parrilla</li>
                  <li>• Il Gatto Nero – Napoletan pizza</li>
                  <li>• Panettone – Coffee and baked goods</li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="h-80 lg:h-full relative">
                <Image 
                  src="https://images.unsplash.com/photo-1581915042771-5b70f9b78695?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Cariló Map" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
              <p className="mb-4">
                For booking inquiries or questions, please contact us directly.  
              </p>
              <a href="tel:+5491121275492" className="block mb-2 hover:text-accent">
                +54 11 2127 5492
              </a>
              <a href="mailto:hi@ilbuco.com.ar" className="block hover:text-accent">
                hi@ilbuco.com.ar
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-2">Policies</h3>
              <ul className="space-y-1 text-gray-600">
                <li>• Pets welcome (cleaning fee + deposit)</li>
                <li>• No parties or unregistered visitors</li>
                <li>• Twin beds available on request</li>
                <li>• Ergonomic office chair free for stays &gt; 1 month</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
