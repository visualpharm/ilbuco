document.addEventListener('DOMContentLoaded', function() {
  // Initialize PhotoSwipe
  let lightbox = null;
  
  // Find all gallery containers
  const galleries = document.querySelectorAll('.gallery');
  
  galleries.forEach((gallery, galleryIndex) => {
    const galleryItems = gallery.querySelectorAll('.gallery-item');
    
    // Create array of items for PhotoSwipe
    const items = [];
    galleryItems.forEach((item, index) => {
      const img = item.querySelector('img');
      const fullSizeUrl = img.getAttribute('data-full-size') || img.src;
      
      // Get natural dimensions of the image
      const tempImg = new Image();
      tempImg.src = fullSizeUrl;
      
      items.push({
        src: fullSizeUrl,
        w: tempImg.naturalWidth || 1200,
        h: tempImg.naturalHeight || 800,
        title: img.alt || ''
      });
      
      // Add click event to open PhotoSwipe
      item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Initialize PhotoSwipe
        const pswpElement = document.querySelector('.pswp');
        const options = {
          index: index,
          bgOpacity: 0.9,
          showHideOpacity: true,
          history: false,
          shareEl: false,
          closeOnScroll: false,
          closeOnVerticalDrag: true,
          fullscreenEl: false,
          zoomEl: true,
          counterEl: true,
          arrowEl: true,
          captionEl: true,
          tapToClose: true,
          clickToCloseNonZoomable: true,
          maxSpreadZoom: 2
        };
        
        lightbox = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        lightbox.init();
      });
    });
  });
});
