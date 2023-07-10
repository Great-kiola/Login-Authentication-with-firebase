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


// Vlaidate email function
function validateEmail(){
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
login.addEventListener("click", function(e){
    e.preventDefault();

    if (validateEmail()){
        input.classList.remove("error")
    }

})

// Google Auth
google.addEventListener('click', function(e) {
    e.preventDefault();
    alert('google has been authenticated!');
});

github.addEventListener('click', function(e) {
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