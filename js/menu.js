document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
      const nav = document.querySelector('.navbar nav');
      nav.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.navbar nav a').forEach(link => {
      link.addEventListener('click', () => {
        const nav = document.querySelector('.navbar nav');
        nav.classList.remove('active');
      });
    });