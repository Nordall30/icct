// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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
    const profile-sectionDiv = document.getElementById('profile');
    const userEmailSpan = document.getElementById('user-email');

    // Check authentication state
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, display user info
            profile-sectionDiv.style.display = 'block';
            userEmailSpan.textContent = user.email;
            // You can add more user information here as needed
        } else {
            // No user is signed in, redirect to login page
            profile-sectionDiv.style.display = 'none'; // Hide profile section if no user is signed in
            window.location.href = 'login.html';
        }
    });

      const logoutBtn = document.querySelector('#logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            signOut(auth).then(() => {
                // Sign-out successful, redirect to login page
                window.location.href = 'login.html';
            }).catch((error) => {
                // An error happened during sign-out
                console.error('Sign Out Error:', error);
            });
        });
    } else {
        console.error('Logout Button not found');
    }
});
