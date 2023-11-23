const underTitle = document.getElementById('under-title');


// skapa koppling till alla element i html
//guess-label
let guessInput = document.getElementById('guess');
//guess-btn
const guessBtn = document.getElementById('guess-btn');

const startBtn = document.getElementById('start-game');

const guessList = document.getElementById('guess-list');

let numberOfGuesses;

//global variabel -- nåbar från flera block
let computerNumber;

// random siffra mellan 0-100 genereras med math.random
startBtn.addEventListener('click', function(){
    computerNumber = Math.floor(Math.random() * 101);
    console.log(computerNumber);
    //töm listan för omstart
    guessList.textContent = '';
    numberOfGuesses = 5;
    underTitle.textContent = `Secret number unlockled! You have ${numberOfGuesses} guesses left!`;
    guessBtn.disabled = false;
})


//skapa eventlistener till knappen
guessBtn.addEventListener('click', function(){
    //  siffran hämtas från input - gissningen
    let userGuess = guessInput.value;
    console.log(computerNumber);
    // siffran jämförs med datorns siffra, med en if sats
    if (userGuess > computerNumber){
        //räknar ner gissningar kvar
        numberOfGuesses --;
        underTitle.textContent = `You have ${numberOfGuesses} guesses left!`
        const listElement = document.createElement('li');
        listElement.textContent = `${userGuess} is too high! Try again!`;
        guessList.appendChild(listElement);
    } else if (userGuess == computerNumber){
        //räknar ner gissningar kvar
        numberOfGuesses --;
        underTitle.textContent = `You WON!! Press Start Game to restart! -->`
        const listElement = document.createElement('li');
        listElement.textContent = `${userGuess} is correct! Well done!`;
        guessList.appendChild(listElement);
        guessBtn.disabled = true;
    } else {
        //räknar ner gissningar kvar
        numberOfGuesses --;
        underTitle.textContent = `You have ${numberOfGuesses} guesses left!`
        const listElement = document.createElement('li');
        listElement.textContent = `${userGuess} is too low! Guess again!`;
        guessList.appendChild(listElement);
    }
    if (numberOfGuesses == 0){
    underTitle.textContent = `YOU HAVE LOST! TRY AGAIN`;
    guessBtn.disabled = true;
    }
    if (numberOfGuesses == 0 && userGuess == computerNumber){
        underTitle.textContent = `You WON!! Press Start Game to restart! -->`
        guessBtn.disabled = true;
    }
//tömmer input
guessInput.value = '';
})





// if (user > co mpuer) --> to high!
// else if (userNumber == computerNumber) ---> you were ruight!!
// else (user < cimputer) --> too low!
//alla kommentarer skapar listelement som appendas i guess-list

// if (numberofGuesses == 5) --> generera en omstart --> guessList töms och ny siffra