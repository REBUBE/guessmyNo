
const progress=document.querySelector(".progress");
const progressBarValue = document.querySelector(".progress-value-container");
const welcomeScreen = document.querySelector(".welcome-screen");
const progressBar = document.querySelector(".progress-bar");
const startGuessBtn=document.querySelector(".start-guess-btn")



// welcome screen 
let progressValue = 0;
let progressEndValue = 100;
let speed = 80;


function loader()
{
    progressValue++;
    progress.style.width = `${progressValue}%`
    progressBarValue.textContent = `${progressValue}%`;

    if (progressValue === progressEndValue)
    {
        clearInterval(loading);
        welcomeScreen.style.display = "none";
        progressBarValue.style.display = "none";
        progressBar.style.display = "none"
        location.replace('guessrules.html')
    }
}

const loading = setInterval(loader, speed)
// end of welcome screen

// rules page
startGuessBtn.addEventListener('click', () =>
{
    location.replace("secretNo.html")
})
// end rules page


// secretNo screen
let intialCounter = 60;
const number = Math.trunc(Math.random() * 20) + 1
const counterID = setInterval(function ()
{
    
    
    
    secretNo.textContent=number
      
})

// const counterID = setInterval(() =>
// {
    
// })



