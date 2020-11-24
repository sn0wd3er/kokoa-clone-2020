const loginForm = document.querySelector("#login-form"),
    loginInput = loginForm.querySelector(".login-form__email"),
    loginPassword = loginForm.querySelector(".login-form__password"),
    loginSubmit = loginForm.querySelector(".login-form__submit");


function printEmail() {
    console.log(loginForm.value);
}


function handleSubmitClick(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
    console.log(loginPassword.value);
}

function init() {
    // loginSubmit.addEventListener("click", handleSubmitClick);
    loginForm.addEventListener("submit", handleSubmit)
}

init();