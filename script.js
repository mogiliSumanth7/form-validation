document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const errorMsg = document.getElementById("errorMsg");

  // Reset error
  errorMsg.textContent = "";

  // Validate
  if (username.length < 3) {
    errorMsg.textContent = "Username must be at least 3 characters.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Invalid email address.";
    return;
  }

  if (password.length < 6) {
    errorMsg.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match.";
    return;
  }

  // Only valid values are here
  const validData = {
    username,
    email,
    password,
  };

  console.log("Valid form data:", validData);
  errorMsg.style.color = "green";
  errorMsg.textContent = "Form submitted successfully!";
  this.reset();
});
