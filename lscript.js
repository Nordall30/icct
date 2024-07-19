// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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
const db = getFirestore(app);

// Signup function
async function signupUser(email, password, name, studentNumber) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Signup successful', user);
        alert('Signup successful!');
        
        // Save additional user information in Firestore
        await setDoc(doc(db, "users", user.uid), {
            name: name,
            studentNumber: studentNumber
        });
        
        // Redirect to main page
        window.location.href = 'Homepage.html';
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error [${errorCode}]: ${errorMessage}`);
        alert(`Error: ${errorMessage}`);
    }
}

// Login function
async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Login successful', user);
        alert('Login successful!');
        
        // Retrieve additional user information from Firestore
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
            const userData = userDoc.data();
            const name = userData.name || prompt("Please enter your name:");
            const studentNumber = userData.studentNumber || prompt("Please enter your student number:");
            
            if (!userData.name || !userData.studentNumber) {
                // Update Firestore with new data if it was missing
                await setDoc(doc(db, "users", user.uid), {
                    name: name,
                    studentNumber: studentNumber
                }, { merge: true });
            }
            
            // Update profile section with retrieved data
            document.getElementById('user-email').innerText = user.email;
            document.getElementById('user-name').innerText = name;
            document.getElementById('user-student-id').innerText = studentNumber;
        } else {
            console.log("No such document!");
        }
        
        // Redirect to main page
        window.location.href = 'Homepage.html';
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error [${errorCode}]: ${errorMessage}`);
        alert(`Error: ${errorMessage}`);
    }
}

// Event listeners for form submissions
document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    loginUser(email, password);
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
