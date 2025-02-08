function logOut() {
    alert('You have been logged out.');
    // You can add functionality to redirect or handle session expiry
}

// Example for automatic logout after 15 minutes (15 * 60 seconds)
let logoutTimer = setTimeout(logOut, 15 * 60 * 1000);
