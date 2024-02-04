const adviceId = document.getElementById("adviceId");
const adviceText = document.getElementById("adviceText");
const btn = document.getElementById("btn");

function getAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(res => {
        return res.json();
    })
    .then(data => {
        const advice = data.slip.advice;
        adviceId.textContent = data.slip.id;
        adviceText.innerHTML = `<p> ${advice} </p>`;
    })
    .catch(err => console.log(err))
}

window.onload = () => {
    getAdvice();
}