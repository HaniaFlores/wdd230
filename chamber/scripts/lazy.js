const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const picture = entry.target;
        const img = picture.querySelector('img');
        const sources = picture.querySelectorAll('source');
        
        // Load the image
        const src = img.getAttribute('data-src');
        img.setAttribute('src', src);
        img.removeAttribute('data-src');
        
        // Load the sources
        sources.forEach((source) => {
          const srcset = source.getAttribute('srcset');
          source.setAttribute('srcset', srcset);
          source.removeAttribute('srcset');
        });
        
        observer.unobserve(picture);
      }
    });
  });
  
  document.querySelectorAll('picture').forEach((picture) => {
    observer.observe(picture);
  });