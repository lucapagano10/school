// Script to remove Retype footer
(function() {
  // Function to remove the footer
  function removeRetypeFooter() {
    // Try multiple approaches to find and remove the footer

    // Approach 1: Find by text content
    document.querySelectorAll('.footer a, .footer div, footer a, footer div').forEach(el => {
      if (el.textContent.includes('Powered by') || el.textContent.includes('Retype')) {
        el.style.display = 'none';
        el.remove();
      }
    });

    // Approach 2: Find by href attribute
    document.querySelectorAll('a[href*="retype"]').forEach(el => {
      el.style.display = 'none';
      el.remove();
    });

    // Approach 3: Find by class name containing 'powered'
    document.querySelectorAll('[class*="powered"], [class*="footer-powered"]').forEach(el => {
      el.style.display = 'none';
      el.remove();
    });

    // Approach 4: Target the last div in the footer
    const footers = document.querySelectorAll('.footer, footer');
    footers.forEach(footer => {
      const children = footer.children;
      if (children.length > 1) {
        for (let i = 1; i < children.length; i++) {
          children[i].style.display = 'none';
          children[i].remove();
        }
      }
    });
  }

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeRetypeFooter);
  } else {
    removeRetypeFooter();
  }

  // Also run after a short delay to catch any dynamically added elements
  setTimeout(removeRetypeFooter, 500);
  setTimeout(removeRetypeFooter, 1000);
  setTimeout(removeRetypeFooter, 2000);

  // Create a MutationObserver to watch for changes to the DOM
  const observer = new MutationObserver(function(mutations) {
    removeRetypeFooter();
  });

  // Start observing the document with the configured parameters
  observer.observe(document.body, { childList: true, subtree: true });
})();
