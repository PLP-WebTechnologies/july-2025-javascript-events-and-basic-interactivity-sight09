//  Part 1: Event Handling

document.getElementById("show-msg-btn").addEventListener("click", function () {
  let msg = document.getElementById("message");
  msg.style.display = msg.style.display === "none" ? "block" : "none";
});

// Part 2: Interactive Elements

// Light/Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
document.getElementById("increase-btn").addEventListener("click", function () {
  count++;
  document.getElementById("counter").textContent = count;
});
document.getElementById("reset-btn").addEventListener("click", function () {
  count = 0;
  document.getElementById("counter").textContent = count;
});

// Part 3: Form Validation

document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop form from reloading the page

  // Get input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  // Clear previous errors
  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";
  document.getElementById("form-success").textContent = "";

  let isValid = true;

  // Validate Name
  if (name.length < 2) {
    document.getElementById("name-error").textContent =
      "Name must be at least 2 characters.";
    isValid = false;
  }

  // Validate Email (simple regex)
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById("email-error").textContent =
      "Enter a valid email address.";
    isValid = false;
  }

  // Validate Password (at least 6 characters)
  if (password.length < 6) {
    document.getElementById("password-error").textContent =
      "Password must be at least 6 characters.";
    isValid = false;
  }

  // Show success if valid
  if (isValid) {
    document.getElementById("form-success").textContent =
      "✅ Registration successful!";
    document.getElementById("signup-form").reset();
  }
});
