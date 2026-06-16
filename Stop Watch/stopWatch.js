let button = document.querySelector("button");
let input = document.querySelector("input");
let display = document.querySelector("h1");
let message = document.querySelector("h2");

let timer;
button.addEventListener("click", () => {
  clearInterval(timer);
  let totalSeconds = Number(input.value);
  if (totalSeconds <= 0) {
    message.innerText = "Please enter valid seconds";
    return;
  }
  message.innerText = "";
  timer = setInterval(() => {
    let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    let seconds = String(totalSeconds % 60).padStart(2, "0");
    display.innerText = `${minutes}:${seconds}`;
    if (totalSeconds === 0) {
      clearInterval(timer);
      message.innerText = "⏰ Time Over! Wake Up Jaggu!";
    }
    totalSeconds--;
  }, 1000);
});
