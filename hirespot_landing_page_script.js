// Get the modal and login button elements
var modal = document.querySelector('.modal');
var loginBtn = document.querySelector('.login-button');

console.log(modal); // Check if modal is selected
console.log(loginBtn); // Check if login button is selected

// When the login button is clicked, toggle the visibility of the modal
loginBtn.addEventListener('click', function() {
    console.log("Login button clicked"); // Check if event listener is triggered
    modal.classList.toggle('show');
});

// Close the modal when the close button is clicked
document.querySelector('.close').addEventListener('click', function() {
    console.log("Close button clicked"); // Check if event listener is triggered
    modal.classList.remove('show');
});

// Close the modal when the user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        console.log("Clicked outside modal"); // Check if event listener is triggered
        modal.classList.remove('show');
    }
});
