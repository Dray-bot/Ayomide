document.getElementById('menuToggle').addEventListener('click', function () {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name && email && message) {
      alert("Message Sent! Thank you for reaching out.");
  } else {
      alert("Please fill out all fields.");
  }
});
