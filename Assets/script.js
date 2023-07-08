const toggle = document.querySelector('.toggle');
const password = document.getElementById('password');

// Authentication button
const google = document.getElementById('google');
const github = document.getElementById('github');

// Google Auth
google.addEventListener('click', function(e) {
    alert('google has been authenticated!');
});

github.addEventListener('click', function(e) {
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