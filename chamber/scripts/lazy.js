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
          const srcset = source.getAttribute('data-srcset');
          source.setAttribute('srcset', srcset);
          source.removeAttribute('data-srcset');
        });
        
        observer.unobserve(picture);
      }
    });
  });
  
  document.querySelectorAll('picture').forEach((picture) => {
    observer.observe(picture);
  });

// Get the last visit date from local storage
		var lastVisit = localStorage.getItem("discoverPageLastVisit");
		if (lastVisit) {
			// Calculate the number of days since the last visit
			var daysSinceLastVisit = Math.round((new Date() - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
			// Display the number of days on the page
			var message = "Welcome back! It's been " + daysSinceLastVisit + " days since your last visit.";
			// Replace "message-element" with the ID of the element where you want to display the message
			document.getElementById("message-element").textContent = message;
		}
		// Save the current visit date to local storage
		localStorage.setItem("discoverPageLastVisit", new Date());