// JavaScript for toggling mobile and tablet menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    // Toggle the menu on mobile screens (phones)
    if (window.innerWidth <= 576) {
        nav.classList.toggle('show');
    } else {
        // Toggle the menu on tablet screens
        nav.classList.toggle('tablet-show');
    }
});

// Toggle menu on tablet when screen is resized to small
window.addEventListener('resize', () => {
    if (window.innerWidth <= 576) {
        nav.classList.remove('tablet-show');
    }
});

  // JavaScript code to handle form submission and success message display
  document.getElementById("consultationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Handle form submission here (e.g., send form data to server)
    // For demonstration purposes, just display the success message
    document.getElementById("consultationForm").reset(); // Reset form fields
    document.getElementById("successMessage").style.display = "block"; // Display success message
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Simulate sending the form data to the server
    // For demonstration purposes, we'll just show the success message
    document.getElementById("contactForm").reset();
    document.getElementById("successMessage").style.display = "block";
    // Hide the success message after 5 seconds
    setTimeout(function() {
        document.getElementById("successMessage").style.display = "none";
    }, 5000); // 5000 milliseconds = 5 seconds
});