// Immediately hide the preloader on page load
window.addEventListener('load', function() {
    document.getElementById('preloader').style.display = 'none';
  });
  
  // Show the preloader on navigation
  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.href !== window.location.href) {
      document.getElementById('preloader').style.display = 'flex'; // Use 'flex' to keep it centered
      // Optionally, prevent the default action if you want to show the loader for some time
      e.preventDefault();
      setTimeout(function() {
        window.location = e.target.href;
      }, 1000); // Adjust time as needed
    }
  });

  
  // Function to perform the counting effect
function count(element) {
    var current = parseInt(element.textContent, 10);
    // Increment by 40 as a base for the counting effect
    current += 5;

    // Update the element's text with the new number
    element.textContent = current;

    // Check if we've reached or exceeded the target number
    if (current < element.getAttribute('data-count')) {
        // If not, call the count function again after a short delay
        setTimeout(function() {
            count(element);
        }, 50); // The delay in milliseconds between each increment
    } else {
        // If exceeded, set the text to the final target number
        element.textContent = element.getAttribute('data-count');
    }
}

// Function to initialize the counting for each .stat-timer element
function startCounting() {
    // Get all the .stat-timer elements
    var timers = document.querySelectorAll('.stat-timer');
    
    // Loop through all .stat-timer elements
    timers.forEach(function(timer) {
        // Store the final number in a data attribute to use it later
        var finalNumber = parseInt(timer.textContent, 10);
        timer.setAttribute('data-count', finalNumber);
        
        // Start counting from 0
        timer.textContent = '0';
        
        // Begin the counting effect
        count(timer);
    });
}

// Call startCounting when the document is ready
document.addEventListener('DOMContentLoaded', function() {
    startCounting();
});
