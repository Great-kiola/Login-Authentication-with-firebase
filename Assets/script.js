const toggle = document.querySelector('.toggle');
const password = document.getElementById('password');

// Authentication button
const google = document.getElementById('google');
const github = document.getElementById('github');

// Login button
const login = document.getElementById('login');

// Inputs
let emailInput = document.getElementById('email');
let input = document.querySelectorAll('input');


// Validate email function
function validateEmail() {
    let validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (emailInput.value.match(validRegex)) {
        emailInput.classList.remove("error")
        return true;
    } else {
        emailInput.classList.add("error");
    }
}

// Clicking on the Login button
login.addEventListener("click", function (e) {

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;

    createUserWithEmailAndPassword(auth, email, password, username)
    .then((userCredential) => {

        // Signed in 
        const user = userCredential.user;

        set(ref(database, 'users/' + user.uid), {
            username: username,
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


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBgVUv72aruTnNFdeFHHmcWllVGBOubGUk",
    authDomain: "fir-project-v1-606b3.firebaseapp.com",
    projectId: "fir-project-v1-606b3",
    storageBucket: "fir-project-v1-606b3.appspot.com",
    messagingSenderId: "737723387706",
    appId: "1:737723387706:web:f01ff99ee76c314b684a03",
    measurementId: "G-3FXSHLE8E0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const auth = getAuth();