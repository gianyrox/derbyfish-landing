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

