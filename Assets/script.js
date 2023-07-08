const toggle = document.querySelector('.toggle');
const input = document.querySelector('input');

var clicked = 0;

toggle.addEventListener('click', () => {

    clicked++;
    console.log(clicked);
    
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type === "password";
    }

    // alert("clicked");

    // alert("You have been successfully clicked!");
})