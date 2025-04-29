// scripts.js

// Handle registration form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const regUsername = document.getElementById('regUsername').value;
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;

    // Store user data in localStorage (for demo purposes)
    localStorage.setItem('registeredUser ', JSON.stringify({
        username: regUsername,
        email: regEmail,
        password: regPassword
    }));

    alert(`Registration successful for ${regUsername}! You can now log in.`);
    document.getElementById('registrationForm').reset();
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve registered user data
    const registeredUser  = JSON.parse(localStorage.getItem('registeredUser '));

    // Debugging: Log the entered values
    console.log("Entered Username:", username);
    console.log("Entered Password:", password);

    // Check if the entered credentials match the registered user
    if (registeredUser  && username === registeredUser .username && password === registeredUser .password) {
        alert("Login successful!");
        localStorage.setItem('loggedInUser ', username); // Store logged-in user
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        alert("Invalid username or password.");
    }
});