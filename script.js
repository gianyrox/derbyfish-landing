
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

