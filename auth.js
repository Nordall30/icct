// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYrcXkSzYNauCY6QypJKtNk_IVHYmn6Gs",
    authDomain: "login-fc3db.firebaseapp.com",
    databaseURL: "https://login-fc3db-default-rtdb.firebaseio.com",
    projectId: "login-fc3db",
    storageBucket: "login-fc3db.appspot.com",
    messagingSenderId: "363044743065",
    appId: "1:363044743065:web:a50a43257c1a12b9955508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Wait for the DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function () {
    const profilesectionDiv = document.getElementById('profile-section');
    const userEmailSpan = document.getElementById('user-email');

    // Check authentication state
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, display user info
            profilesectionDiv.style.display = 'block';
            userEmailSpan.textContent = user.email;
            // You can add more user information here as needed
        } else {
            // No user is signed in, redirect to login page
            profilesectionDiv.style.display = 'none'; // Hide profile section if no user is signed in
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
