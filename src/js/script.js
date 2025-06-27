const apelidoInput = document.getElementById("name");
const password = document.getElementById("password");

const dados = {
    nameCorrect: "Pitchuquito",
    passCorrect: 7032023
};

function authenticate() {
    if (containsBlank()) {
        if (apelidoInput.value.toLowerCase() == dados.nameCorrect.toLowerCase() && password.value == dados.passCorrect)
            handleSlideTransition()

        else
            alert("Usuário ou senha incorretos")

    }

}

function containsBlank() {
    if (apelidoInput.value == '' || password.value == '') {
        alert("Campos vazios não são permitidos");
        return false;
    }

    if (isNaN(password.value)) {
        alert("A senha é composta apenas por números");
        return false;
    }

    return true;
}

function handleSlideTransition() {
    const authenticationSection = document.getElementById("authentication");
    const messageSection = document.getElementById("message");

    authenticationSection.classList.add("hide");

    authenticationSection.addEventListener('transitionend', () => {
        authenticationSection.style.display = 'none';
        messageSection.classList.add("show");
    }, { once: true });
}