// login.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get values from the input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation check (replace with your logic)
    if (username === "A" && password === "A") {
        window.location.href = "index.html";
    } else {
        // Show error message on failed login
        document.getElementById('message').innerText = "Invalid username or password. Please try again.";
    }
});