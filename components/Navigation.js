import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/rooms', name: 'Rooms' },
    { path: '/activities', name: 'Activities' },
    { path: '/location', name: 'Location' },
    { path: '/contact', name: 'Contact' },
  ];

  // Close menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMenuOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <span className="logo-text">Il Buco</span>
              <span className="logo-subtext">Cariló</span>
            </a>
          </Link>
        </div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'is-active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`nav ${isMenuOpen ? 'is-active' : ''}`}>
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`nav-link ${currentPath === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div 
          className={`nav-overlay ${isMenuOpen ? 'is-active' : ''}`} 
          onClick={() => setIsMenuOpen(false)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setIsMenuOpen(false)}
          aria-label="Close menu"
        />
      </div>
    </header>
  );
}
