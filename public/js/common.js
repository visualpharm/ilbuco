document.addEventListener('DOMContentLoaded', function() {
  // Insert navigation
  const navElement = document.getElementById('navigation');
  if (navElement) {
    // Get current page for determining active item
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Define menu structure with URLs and labels
    const menuItems = {
      'index.html': { selector: '.logo', text: 'IL BUCO', isLogo: true },
      'rooms.html': { selector: '#rooms-link', text: 'Rooms' },
      'location.html': { selector: '#location-link', text: 'Location' },
      'activities.html': { selector: '#activities-link', text: 'Things to Do' },
      'contact.html': { selector: '#contact-link', text: 'Contact' }
    };
    
    // Build logo element (either link or span depending on active state)
    let logoHTML = '';
    if (currentPage === 'index.html' || currentPage === '' || currentPage === '/') {
      logoHTML = `<span class="logo active">IL BUCO</span>`;
    } else {
      logoHTML = `<a href="index.html" class="logo">IL BUCO</a>`;
    }
    
    // Build menu items HTML
    let menuItemsHTML = '';
    ['rooms.html', 'location.html', 'activities.html', 'contact.html'].forEach(page => {
      const item = menuItems[page];
      const id = item.selector.replace('#', '');
      
      if (page === currentPage) {
        // For active page, use span with active class instead of link
        menuItemsHTML += `<span id="${id}" class="active">${item.text}</span>`;
      } else {
        // For non-active pages, use regular links
        menuItemsHTML += `<a href="${page}" id="${id}">${item.text}</a>`;
      }
    });
    
    // Insert complete navigation HTML
    navElement.innerHTML = `
      ${logoHTML}
      <div class="menu-items">
        ${menuItemsHTML}
      </div>
    `;
  }
});
