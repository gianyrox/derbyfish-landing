document.getElementById('emailForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  try {
    const response = await fetch('https://devapi.derby.fish/interest', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      alert('Thank you for subscribing!');
      emailInput.value = ''; // Clear the input
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Network error. Please try again later.');
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const demoScreens = document.querySelectorAll('.demo-screen');
    let currentScreenIndex = 0;
    const rotationInterval = 3000; // 3 seconds

    function rotateScreens() {
        // Remove active class from current screen
        demoScreens[currentScreenIndex].classList.remove('active');
        
        // Move to next screen, or back to first if at end
        currentScreenIndex = (currentScreenIndex + 1) % demoScreens.length;
        
        // Add active class to new current screen
        demoScreens[currentScreenIndex].classList.add('active');
    }

    // Start the rotation
    setInterval(rotateScreens, rotationInterval);
});

// Countdown Timer Functionality
function updateCountdown() {
    const targetDate = new Date('May 3, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown-container').innerHTML = '<p class="countdown-text">Tickets are now on sale!</p>';
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

