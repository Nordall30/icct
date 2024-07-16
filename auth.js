// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

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

// Check authentication state
onAuthStateChanged(auth, (user) => {
    if (!user) {
        // No user is signed in, redirect to login page
        window.location.href = 'login.html';
    } else {
        // User is signed in, display user info
        document.getElementById('profile').style.display = 'block';
        document.getElementById('user-email').textContent = user.email;
        // Fetch and display more user info if needed
    }
});
