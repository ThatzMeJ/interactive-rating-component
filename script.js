const submitBtn = document.querySelectorAll('.button-option');

submitBtn.addEventListener('click', () =>{
  submitBtn.style.backgroundColor = 'hsl(25, 97%, 53%)';
});
function submitRating(rating) {
  // Update the thank-you message based on the selected rating
  const thankYouMessage = document.getElementById('thank-you-message');
  thankYouMessage.innerHTML = `
    <h2>Thank you!</h2>
    <p>You have rated ${rating} stars. We appreciate your feedback. If you ever need more support, don’t hesitate to get in touch!</p>
  `;
}
