// Load header component
async function loadHeader() {
    const response = await fetch('/components/header.html');
    const headerHtml = await response.text();
    document.getElementById('header-container').innerHTML = headerHtml;
}

// Router function
async function router() {
    const path = window.location.pathname;
    const mainContent = document.getElementById('main-content');

    // Load header for all routes
    await loadHeader();

    // Route handling
    switch (path) {
        case '/':
            mainContent.innerHTML = document.getElementById('home-template').innerHTML;
            break;
        case '/privacy':
            const response = await fetch('/privacy-content.html');
            const privacyHtml = await response.text();
            mainContent.innerHTML = privacyHtml;
            break;
        default:
            mainContent.innerHTML = '<h1>404 - Page Not Found</h1>';
    }
}

// Initialize router
window.addEventListener('load', router);
window.addEventListener('popstate', router);

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

