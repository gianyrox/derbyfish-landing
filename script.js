
document.getElementById('emailForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const messageElement = document.getElementById('message');

  // Simulate a successful email submission
  if (emailInput.value) {
    messageElement.textContent = `Thank you for subscribing with ${emailInput.value}!`;
    messageElement.classList.remove('hidden');
    emailInput.value = ''; // Clear the input
  }
});
