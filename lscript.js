import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYrcXkSzYNauCY6QypJKtNk_IVHYmn6Gs",
    authDomain: "login-fc3db.firebaseapp.com",
    projectId: "login-fc3db",
    storageBucket: "login-fc3db.appspot.com",
    messagingSenderId: "363044743065",
    appId: "1:363044743065:web:a50a43257c1a12b9955508"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);


// Function to validate inputs
function validateInputs(name, studentNumber) {
    // Basic format checks (customize as needed)
    const namePattern = /^[a-zA-Z\s]+$/; // Only letters and spaces
    const studentNumberPattern = /^[0-9]{8}$/; // Example: 8 digits

    if (!name || name.trim() === '') {
        alert('Name is required.');
        return false;
    }
    if (!namePattern.test(name)) {
        alert('Name must contain only letters and spaces.');
        return false;
    }
    if (!studentNumber || studentNumber.trim() === '') {
        alert('Student Number is required.');
        return false;
    }
    if (!studentNumberPattern.test(studentNumber)) {
        alert('Student Number must be exactly 8 digits.');
        return false;
    }
    return true;
}

// Updated Signup function
function signupUser(email, password, name, studentNumber) {
    if (!validateInputs(name, studentNumber)) {
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Signup successful', user);
            alert('Signup successful!');

            // Save additional user information to Firestore
            saveUserProfile(user.uid, name, studentNumber, email);

            // Redirect to main page
            window.location.href = 'Homepage.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error [${errorCode}]: ${errorMessage}`);
            alert(`Error: ${errorMessage}`);
        });
}

// Updated Login function
function loginUser(email, password, name, studentNumber) {
    if (!validateInputs(name, studentNumber)) {
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            const user = userCredential.user;
            console.log('Login successful', user);
            alert('Login successful!');

            // Check if user profile exists and update it if necessary
            const userDoc = doc(firestore, 'users', user.uid);
            const docSnap = await getDoc(userDoc);

            if (!docSnap.exists()) {
                // If user profile does not exist, create it
                saveUserProfile(user.uid, name, studentNumber, email);
            }

            // Redirect to main page
            window.location.href = 'Homepage.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error [${errorCode}]: ${errorMessage}`);
            alert(`Error: ${errorMessage}`);
        });
}


// Event listeners for form submissions
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const name = document.getElementById('login-name').value;
    const studentNumber = document.getElementById('login-student-number').value;
    loginUser(email, password, name, studentNumber);
});

document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const name = document.getElementById('signup-name').value;
    const studentNumber = document.getElementById('signup-student-number').value;
    signupUser(email, password, name, studentNumber);
});

// Show/Hide password functionality
const pwShowHide = document.querySelectorAll(".eye-icon");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
    })
});

const forms = document.querySelector(".forms");
const links = document.querySelectorAll(".link");

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
});

