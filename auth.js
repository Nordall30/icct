// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-storage.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";


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
const storage = getStorage(app);
const db = getFirestore(app);

// Wait for the DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function () {
    const profilesectionDiv = document.getElementById('profile-section');
    const dashboardSection = document.getElementById('dashboard-section');
    const userEmailSpan = document.getElementById('user-email');
    const profileImg = document.getElementById('profile-img');

    // Check authentication state
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, display user info
            dashboardSection.style.display = 'flex';
            profilesectionDiv.style.display = 'none';
            userEmailSpan.textContent = user.email;
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


 document.getElementById('student-complaint-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form values
      const complaintType = document.querySelector('input[name="complaint-type"]:checked').value;
      const complaintDescription = document.getElementById('complaint-description').value;
      const studentName = document.getElementById('student-name').value;
      const studentId = document.getElementById('student-id').value;
      const email = document.getElementById('email').value;

      // Save data to Firestore
      db.collection("complaints").add({
        complaintType: complaintType,
        complaintDescription: complaintDescription,
        studentName: studentName,
        studentId: studentId,
        email: email,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(function() {
        alert('Complaint submitted successfully!');
        // Clear the form
        document.getElementById('student-complaint-form').reset();
      })
      .catch(function(error) {
        console.error('Error submitting complaint: ', error);
      });
    });

const user = auth.currentUser;
if (user) {
    try {
        await updateProfile(user, { photoURL: downloadURL });
        // Successfully updated profile photoURL
        console.log('Profile picture updated successfully.');
    } catch (error) {
        console.error('Error updating profile picture:', error);
    }
} else {
    console.error('No user signed in.');
}



