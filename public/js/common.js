document.addEventListener('DOMContentLoaded', function() {
  // Insert navigation
  const navElement = document.getElementById('navigation');
  if (navElement) {
    navElement.innerHTML = `
      <a href="index.html" class="logo">IL BUCO</a>
      <div class="menu-items">
        <a href="rooms.html" id="rooms-link">Rooms</a>
        <a href="location.html" id="location-link">Location</a>
        <a href="activities.html" id="activities-link">Things to Do</a>
        <a href="contact.html" id="contact-link">Contact</a>
      </div>
    `;
    
    // Set active menu item
    const currentPage = window.location.pathname.split('/').pop();
    const links = {
      'index.html': '.logo',
      'rooms.html': '#rooms-link',
      'location.html': '#location-link',
      'activities.html': '#activities-link',
      'contact.html': '#contact-link'
    };
    
    if (currentPage in links) {
      const activeLink = document.querySelector(links[currentPage]);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    } else if (currentPage === '' || currentPage === '/') {
      document.querySelector('.logo').classList.add('active');
    }
  }
});
