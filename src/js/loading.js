const flowers = document.querySelector(".flowers");
const letter = document.getElementById("letter");

document.body.style.overflow = 'hidden'

setTimeout(() => {
    // Adiciona a classe que faz a transição da carta aparecer
    letter.classList.add("show");
    // Adiciona o listener para quando a transição da carta terminar
    letter.addEventListener('transitionend', function handler() {
        flowers.classList.add("not-loaded");
        document.body.style.overflow = 'auto'
        // Remove o listener para que ele não seja acionado novamente
        letter.removeEventListener('transitionend', handler);
    });
}, 10000);
