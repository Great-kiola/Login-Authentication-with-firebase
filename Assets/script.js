const toggle = document.querySelector('.toggle');
const password = document.getElementById('password');

var clicked = 20;

toggle.addEventListener('click', () => {
    
    if (password.type === "password") {
        password.type = "text";
        toggle.classList.replace("uil-eye-slash", "uil-eye");
    } else {
        password.type = "password";
        toggle.classList.replace("uil-eye", "uil-eye-slash")
    }
});