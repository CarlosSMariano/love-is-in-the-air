// onload = () => {
//     const c = setTimeout(() => {
//       document.body.classList.remove("not-loaded");
//       clearTimeout(c);
//     }, 1000);
//   };

// SLIDSHOW:
  let slide = document.querySelectorAll('.slide');
  let index = 0;

setInterval( ()=>{
    slide[index].classList.remove('active');
    index = (index + 1) % slide.length;
    slide[index].classList.add('active')
}, 5000);

// CLOCK

function diferentData(initial){
  const now = new Date();
  const start = new Date(initial);

  const diffMs = now.getTime() - start.getTime();

  const diffSeconds = Math.floor(diffMs / 1000);
  const diffMinuts = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinuts / 60);
  const diffDays = Math.floor(diffHours / 24);

  const seconds = diffSeconds % 60;
  const minuts = diffMinuts % 60;
  const hours = diffHours % 24;

  return{
    days : diffDays, 
    hours : hours, 
    minuts : minuts, 
    seconds : seconds
  };
}

setInterval(updateTime, 1000)

function updateTime(){
  const date = "2023-06-28T17:30:00";
const clock = diferentData(date);

document.getElementById("clock").textContent = `Hoje fazemos ${clock.days} dias, ${clock.hours} horas, ${clock.minuts} minutos e ${clock.seconds} segundos`;

}
