//Variables
const matchButton = document.querySelectorAll(".match-button")[0];
const resultParagrpah = document.querySelectorAll(".result-name");

//Event Listeneres

matchButton.addEventListener("click", test);

//Functions
function test() {
    let firstNameInput = document.getElementById("first-name").value;
    let secondNameInput = document.getElementById("second-name").value;
    const score = Math.round(Math.random() * 100);
    const scoreParagraph = document.querySelectorAll(".score")[0];
    resultParagrpah[0].innerText = firstNameInput;
    resultParagrpah[1].innerText = secondNameInput;
    scoreParagraph.innerText = score + " %";
    firstNameInput = " ";
    secondNameInput = " ";
}