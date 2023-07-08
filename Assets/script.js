const toggle = document.querySelector('.toggle');
const input = document.querySelector('input');

toggle.addEventListener('click', () => {

    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type === "password";
    }

    // alert("clicked");

    // alert("You have been successfully clicked!");
})