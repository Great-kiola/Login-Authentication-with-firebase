const toggle = document.querySelector('.toggle');
const password = document.getElementById('password');

// Authentication button
const google = document.getElementById('google');
const github = document.getElementById('github');

// Login button
const login = document.getElementById('login');

// Inputs
let emailInput = document.getElementById('email');
let input = document.querySelector('input');


// Validate email function
function validateEmail() {
    let validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailInput.value.match(validRegex)) {
        // email.style.display = "none";
        input.classList.remove("error")
        return true;
    } else {
        // email.style.display = "flex";
        input.classList.add("error");
    }
}

// Clicking on the Login button
login.addEventListener("click", function (e) {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

        // Signed in 
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid), {
            email: email
        })

        alert("user created");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert (errorMessage, errorCode);
        // ..
    });


    e.preventDefault();

    if (validateEmail()){
        input.classList.remove("error")
    }

});

// Google Auth
google.addEventListener('click', function (e) {
    e.preventDefault();
    alert('google has been authenticated!');
});

github.addEventListener('click', function (e) {
    e.preventDefault();
    alert('github has been authenticated!');
});


// Password show/hide
toggle.addEventListener('click', () => {

    if (password.type === "password") {
        password.type = "text";
        toggle.classList.replace("uil-eye-slash", "uil-eye");
    } else {
        password.type = "password";
        toggle.classList.replace("uil-eye", "uil-eye-slash")
    }
});


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";


// Done: Add SDKs for Firebase products that you want to use
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: "AIzaSyBgVUv72aruTnNFdeFHHmcWllVGBOubGUk",
    authDomain: "fir-project-v1-606b3.firebaseapp.com",
    projectId: "fir-project-v1-606b3",
    storageBucket: "fir-project-v1-606b3.appspot.com",
    messagingSenderId: "737723387706",
    appId: "1:737723387706:web:f01ff99ee76c314b684a03",
    measurementId: "G-3FXSHLE8E0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth();