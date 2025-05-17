import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import 'photoswipe/dist/photoswipe.css';

const Gallery = ({ children, galleryId, options = {} }) => {
  const galleryRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [PhotoSwipe, setPhotoSwipe] = useState(null);

  useEffect(() => {
    setIsClient(true);
    
    // Dynamically import PhotoSwipe on client-side only
    const loadPhotoSwipe = async () => {
      const psModule = await import('photoswipe');
      setPhotoSwipe(psModule.default || psModule);
    };
    
    loadPhotoSwipe();
  }, []);

  useEffect(() => {
    if (!isClient || !galleryRef.current || !PhotoSwipe) return;

    const items = [];
    const links = galleryRef.current.querySelectorAll('a[data-pswp-width]');
    
    const handleClick = (e, link, items) => {
      e.preventDefault();
      
      const pswpElement = document.querySelector('.pswp');
      const gallery = new PhotoSwipe({
        dataSource: items,
        pswpModule: PhotoSwipe,
        index: items.findIndex(i => i.src === link.getAttribute('href')),
        ...options
      });
      
      gallery.on('uiRegister', function() {
        // Add any custom UI elements here if needed
      });
      
      gallery.init();
    };
    
    const clickHandlers = [];
    
    links.forEach(link => {
      const item = {
        src: link.getAttribute('href'),
        w: parseInt(link.getAttribute('data-pswp-width'), 10),
        h: parseInt(link.getAttribute('data-pswp-height'), 10),
        title: link.getAttribute('data-title') || ''
      };
      items.push(item);
      
      const clickHandler = (e) => handleClick(e, link, items);
      link.addEventListener('click', clickHandler);
      clickHandlers.push({ link, handler: clickHandler });
    });

    return () => {
      clickHandlers.forEach(({ link, handler }) => {
        link.removeEventListener('click', handler);
      });
    };
  }, [isClient, PhotoSwipe, PhotoSwipeUI, options]);

  if (!isClient) {
    return (
      <div ref={galleryRef} className="gallery">
        {children}
      </div>
    );
  }

  return (
    <div ref={galleryRef} className="gallery">
      {children}
      <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="pswp__bg" />
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item" />
            <div className="pswp__item" />
            <div className="pswp__item" />
          </div>
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter" />
              <button className="pswp__button pswp__button--close" title="Close (Esc)" />
              <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut" />
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__caption">
              <div className="pswp__caption__center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Gallery), {
  ssr: false
});
