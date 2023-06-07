const guessState = document.querySelector(".guess-state")
const correctGuessState = document.querySelector(".correct-guess-state")
const secretNoTxt = document.querySelector(".secret-nos-txt")
const secretNo = document.querySelector(".secret-no") 
const Score = document.querySelector(".intial-score")
const Timer = document.querySelector(".intial-timer");
const HighScore=document.querySelector(".intial-highscore")
const checkGuessBtn = document.querySelector(".check-guess")
const restartGuessBtn=document.querySelector(".restart-guess")

const hideQuestionMark = document.querySelector(".question-mark");
const stopSecretBoxAnimation = document.querySelector(".secter-box");
const removeInputField = document.querySelector(".guess-field")
const scoreTimeField = document.querySelector(".score-timer-area")
const scoreDisplay=document.querySelector(".score p")
const displayHighscore = document.querySelector(".highscore p")



const number = Math.trunc(Math.random() * 20) + 1;
secretNo.textContent = number

let score = 20;
let highScore = 0;

checkGuessBtn.addEventListener('click', () =>
{


    const counterID = setInterval(() => 
        {
        startTimeUsed++;
        Timer.textContent = `${startTimeUsed}s`
        
        }, 600)
        

        const guessInputValue = Number(document.querySelector(".guess-input").value);

        if (!guessInputValue)
        {
        guessState.textContent = "No guess value!"
        }
        else if (guessInputValue === number)
        {
        guessState.textContent = "CORRECT 👍!"
        guessState.classList.add("scaleUptext");
        hideQuestionMark.style.display = "none"
        secretNoTxt.classList.add("add-hideSecretNoTxt")
        secretNo.classList.add("add-displaySecretNo")
        removeInputField.style.display = "none"
        scoreTimeField.style.display = "flex"
        scoreTimeField.style.flexDirection = "column"
        scoreTimeField.style.height = "120px"
        scoreTimeField.style.justifyContent = "space-between"
        scoreDisplay.style.fontSize = "20px"
        displayHighscore.style.fontSize="20px" 
        displayHighscore.style.display="block"
        checkGuessBtn.style.display="none"
        restartGuessBtn.style.position = "absolute"
        restartGuessBtn.style.top = "105%"
        restartGuessBtn.style.left= "10%"
            if (score > highScore)
            {
                highScore = score;
                HighScore.textContent=highScore
           }
        }
            
        else if(guessInputValue>number)
        {
            if (score > 1)
            {
                score--;
                Score.textContent = score;
                guessState.textContent = "TOO HIGH 👎👎!"
                guessState.classList.add("scaleUptext");
            }
            else
            {
                location.replace('gameover.html')
            }
            
        }
        else if(guessInputValue<number)
        {   
            if (score > 1)
            {
                score--;
                Score.textContent = score;
                guessState.textContent = "TOO LOW 👎👎!"
                guessState.classList.add("scaleUptext");
            }
            else
            {
                location.replace('gameover.html')
            }
        }
    
    
    
    restartGuessBtn.addEventListener("click", function ()
    {     
          location.replace('secretNo.html')  
    })
    

})
