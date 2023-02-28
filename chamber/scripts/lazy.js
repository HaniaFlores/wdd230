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

/* Last Visit */
// Retrieve the date of the last visit from local storage

let lastVisit = localStorage.getItem("lastVisit");
if (lastVisit == null)
{
  lastVisit = currentDate.getTime();
}

// Calculate the difference between the current date and the last visit in milliseconds
const differenceMs = currentDate.getTime() - lastVisit;

// Convert the difference from milliseconds to days
const differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
localStorage.setItem("lastVisit", currentDate.getTime());
localStorage.setItem("daysSinceLastVisit", differenceDays);