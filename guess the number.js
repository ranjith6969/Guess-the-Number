let gr = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let rn = Math.ceil(Math.random() * 100)

function checkGuess() {
    let gn = parseInt(userInput.value);
    if (gn > rn) {
        gr.textContent = "Too high, Try again!!";
        gr.style.color = "white";
    } else if (gn < rn) {
        gr.textContent = "Too low, Try again!!";
        gr.style.color = "white";
    } else if (gn === rn) {
        gr.textContent = "Congratulations, You got it right!!";
        gr.style.color = "white";
        gr.style.backgroundColor = "green"
    } else {
        gr.textContent = "Please provide a valid input.";
        gr.style.backgroundColor = "#1e217c";
    }
}