const hint = document.getElementById("hint");
const noOfGuessesRef = document.getElementById("no-Of-guesses");
const guessesNumsRef = document.getElementById("guesses-nums");
const restartButton = document.getElementById("restart");
const game = document.getElementById("game");
const guessesInput = document.getElementById("guess");
const checkButton = document.getElementById("check-btn");

let answer,noOfGuesses,guessedNumArr;

const play = () =>{
    const guess = guessesInput.value;
    if(guess<1 || guess>100 || isNaN(guess))
    {
        alert("Please enter the number between 1 to 100");
        return;
    }
    guessedNumArr.push(guess);
    noOfGuesses += 1;

    if(guess != answer)
    {
        if(guess<answer)
        {
            hint.innerHTML = "Low! Try Again";
        }else {
            hint.innerHTML = "High! Try Again";
        }
    
    noOfGuessesRef.innerHTML = `<span>No. of Guess </span>${noOfGuesses}`;
    guessesNumsRef.innnerHTML = `<span>Guessed number are : </span> ${guessedNumArr.join( ", ")}`;

    hint.classList.remove("error");
    setTimeout(()=>{
        hint.classList.add("error"),20
    });
    }else{
        hint.innerHTML = `Congratulations! <br> The number was <span>${answer}</span> . <br> You guessed the number in <span>${noOfGuesses}</span> tires. `;
        hint.classList.add("success");
        game.style.display = none;
        restartButton.style.display = block;
    }
};


const init = () => {
    console.log("game started");
    answer = Math.floor(Math.random()*100) + 1;
    console.log(answer);
    noOfGuesses = 0;
    guessedNumArr = [];
    noOfGuessesRef.innerHTML = "No. of guesses : 0";
    guessesNumsRef.innerHTML = "Gusses number are none";
    guessesInput.value = "";
    hint.classList.remove("error","success");
};


guessesInput.addEventListener("keydown",(event) => {
    if(event.keycode === 13){
        event.preventDefault();
        play();
    }
});


restartButton.addEventListener("click" , () => {
    game.style.display = "grid";
    restartButton.style.display = none;
    hint.innerHTML = "";
    hint.classList.remove("success");
    init();
});


checkButton.addEventListener("click",play);

window.addEventListener("load",init);

