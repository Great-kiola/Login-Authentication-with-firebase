const toggle = document.querySelector('.toggle');
const password = document.getElementById('password');

// Authentication button
const google = document.getElementById('google');
const github = document.getElementById('github');

// Login button
const login = document.getElementById('login');

login.addEventListener('click', function (e) {
    e.preventDefault();
    alert('You have successfully logged in');
});

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