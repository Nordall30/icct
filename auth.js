// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-auth-domain",
    databaseURL: "your-database-url",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Wait for the DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function () {
    // Check authentication state
    onAuthStateChanged(auth, (user) => {
        const profileDiv = document.getElementById('profile');
        
        if (user) {
            // User is signed in, display user info
            profile-sectionDiv.style.display = 'block';
            profile-sectionDiv.innerHTML = `
                <h2>User Profile</h2>
                <p>Email: ${user.email}</p>
                <!-- Add more user information as needed -->
            `;
        } else {
            // No user is signed in, redirect to login page
            window.location.href = 'login.html';
        }
    });
});
