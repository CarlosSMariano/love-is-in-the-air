const button = document.querySelector(".button")
const lidOne = document.querySelector(".lid.one");
const lidTwo= document.querySelector(".lid.two");


button.addEventListener('click', openEnvelope)

function openEnvelope(){
    lidOne.style.transform = "rotateX(90deg)"
   setTimeout(() => {
        lidTwo.style.transform = "rotateX(180deg)";
    }, 300);
}
