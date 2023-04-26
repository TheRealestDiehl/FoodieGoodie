
$(function () {
  $("#navi").load("./navbar.html");
});

// Get the form element
const form = document.querySelector('form');
const successAnimation = document.querySelector('.success-animation');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  if (name == "") {
    alert("Name is empty!!");
  } else if (email == "") {
    alert("Email is empty!!");
  } else if (message == "") {
    alert("Message is empty!!");
  } else {
    // Store the form data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);

    // Clear the form fields
    form.reset();

    // Display a confirmation message to the user
    // alert('Form data has been saved to local storage.');
    successAnimation.style.display = 'block';
    setTimeout(() => {
      successAnimation.style.display = 'none';
    }, 3000);
    // do other form submission actions here
  }



});



