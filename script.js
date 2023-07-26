
let keysArr = [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
    "Minus",
    "Equal",
    "Backspace",
    "Tab",
    "KeyQ",
    "KeyW",
    "KeyE",
    "KeyR",
    "KeyT",
    "KeyY",
    "KeyU",
    "KeyI",
    "KeyO",
    "KeyP",
    "BarcketLeft",
    "BracketRight",
    "Bachslash",
    "CapsLock",
    "KeyA",
    "KeyS",
    "KeyD",
    "KeyF",
    "KeyG",
    "KeyH",
    "KeyJ",
    "KeyK",
    "KeyL",
    "KeyP",
    "Semicolon",
    "Quote",
    "Enter",
    "ShiftLeft",
    "KeyZ",
    "KeyX",
    "KeyC",
    "KeyV",
    "KeyB",
    "KeyN",
    "KeyM",
    "Comma",
    "Period",
    "Slash",
    "ShiftRight",
]

var randKey
var randWord
let wordsArr = [ 'թշնամի', 'դիմակ', 'նորածին', 'վաղաժամ', 'տերև', 'աշխատավարձ', 'կազմակերպություն', 'երեք', 'արցունք', 'դեղին', 'համալիր', 'շուն', 'վերջին', 'խոսք', 'աղետ', 'անգամ', 'նվագարան', 'շուրջ', 'շրջան', 'գալարվել', 'կահույք', 'մուլտ', 'արև', 'մոլորակ', 'խորշունջ', 'վերանորոգում', 'պահեստ', 'բարի', 'գանգատ', 'մասնակցություն',  'սկավառակ', 'ամբողջ', 'պատրաստ','պատուհան', 'դասավանդող', 'լուսաբանում', 'գույք', 'խանգարում', 'գործակալ', 'մայրաքաղաք', 'պատուհան', 'դիմակ', 'դաս', 'սրահ', 'հեռուստացույց', 'գարուն', 'սուրբ', 'պատուհան', 'վերանորոգում', 'կերպար', 'թողարկում', 'բնակարան', 'ականջ', 'ավագ', 'կարիճ', 'գործ', 'հասարակական', 'բնակություն', 'սրտում',  'դուռ', 'գլխավոր', 'գեղեցիկ', 'մահացու', 'աշուն', 'վայր', 'գիշեր', 'կին', 'վաղաժամ', 'վերաբերում', 'հեղինակ', 'մարզավայր', 'մայր','թանգարան', 'հաճախորդ', 'հունարեն', 'հավատք', 'գարուն', 'պահապան', 'ավազան', 'բնակարան', 'շուն', 'պատահար',  'դպրոց', 'հասարակական', 'արջ', 'գույն', 'տներ', 'դեղատան', 'թիրախ']

let playButtEl = document.getElementById("play")
let timeLeftEl = document.getElementById("timeLeft")
let playAgainButtEl = document.getElementById("playAgain")
let goToMenuButtEl = document.getElementsByClassName("goToMenu")
let typingButtEl = document.getElementById("typing")

let trainingButtEl = document.getElementById("training")
let menuEl = document.getElementById("menu")
let rocketEl = document.getElementById("figure-jumping")
let chooseEl = document.getElementById("choose")
let keyboardEl = document.getElementById("keyboard")
let gameOverEl = document.getElementById("gameOver")
let scoreEl = document.getElementById("score")
let yourScoreEl = document.getElementById("yourScore")
let highScoreEl = document.getElementById("highScore")
let typingEl = document.getElementById("typingGame")
let loremIpsumEl = document.getElementById("loremIpsum")
let countEl = document.getElementById("count-down")
let countNumEl = document.getElementById("start-count")
let inputEl = document.getElementById("input")
var rightMusic = new Audio("assets/sounds/correct.mp3");
var wrongMusic = new Audio("assets/sounds/wrong.mp3");

if(!localStorage.score){
    localStorage.score = 0
}
highScoreEl.innerHTML = localStorage.score


if(!localStorage.playAgain){
    localStorage.playAgain = ""
}else if(localStorage.playAgain == "playAgain"){

    menuEl.style.display = "none"
    rocketEl.style.display = "none";
    id = setInterval(countDown, 1000);
    localStorage.playAgain = ""
    countEl.style.display = "block";
}

function setRandWord(){
    randWord = wordsArr[Math.floor(Math.random() * wordsArr.length)]
    loremIpsumEl.innerHTML = randWord
    inputEl.addEventListener("keyup",  (e)=>foo(e))
}

function foo(key){
        if(key.key == randWord[inputEl.value.length - 1]){
           
            scoreEl.innerHTML++
            if(inputEl.value==randWord){
             
                let randWord1 = wordsArr[Math.floor(Math.random() * wordsArr.length)]
                while(randWord1 == randWord){
                    randWord1 = wordsArr[Math.floor(Math.random() * wordsArr.length)]
                }
                randWord = randWord1
                loremIpsumEl.innerHTML = randWord
                inputEl.value = ""
            }
        }
        else{
            scoreEl.innerHTML--
            inputEl.value = inputEl.value.slice(0, inputEl.value.length - 1)
            redBG()
            setTimeout(normalBG, 200)
            setTimeout(redBG, 400)
            setTimeout(normalBG, 600)
        }
    
}

playButtEl.addEventListener("click", play)
function play(){
    menuEl.style.display = "none";
    rocketEl.style.display = "none";
    chooseEl.style.display = "block";
}

trainingButtEl.addEventListener("click", training)
function training(){
    chooseEl.style.display = "none";
    keyboardEl.style.display = "block";
    chooseKey();
}

typingButtEl.addEventListener("click", typing)

function typing(){
    chooseEl.style.display = "none";
    countEl.style.display = "block";
    countNumEl.innerHTML = 3;
    id = setInterval(countDown, 1000);
    randWord = ""
}

playAgainButtEl.addEventListener("click", playAgain)
function playAgain(){
    localStorage.playAgain = "playAgain"
    location.reload()
}

goToMenuButtEl[0].addEventListener("click", goToMenu)
goToMenuButtEl[1].addEventListener("click", goToMenu)
function goToMenu(){
    location.reload()
}

function countDown(){
    if(countNumEl.innerHTML > 0){
        countNumEl.innerHTML--;
    }
    else{
        countEl.style.display = "none";
        typingEl.style.display = "block";
        clearInterval(id)
        setRandWord()
        timeLeftEl.innerHTML = 60
        id1 = setInterval(timeCountDown, 1000);
        scoreEl.innerHTML = 0
        inputEl.value = ""
        highScoreEl.innerHTML = localStorage.score
    }
}

function timeCountDown(){
    if(timeLeftEl.innerHTML > 0){
        timeLeftEl.innerHTML--;
    }
    else{  
        gameOverEl.style.display = "block";
        typingEl.style.display = "none";
        yourScoreEl.innerHTML = scoreEl.innerHTML
        clearInterval(id1)
        if(parseInt(scoreEl.innerHTML) > parseInt(localStorage.score)){
            localStorage.score = parseInt(scoreEl.innerHTML)
        }
    }
}

var id;
function rainbowBG(){
    let red = 130
    let green = 0
    let blue = 0
    let body = document.getElementById("body")

    id = setInterval(colorChange, 2)

    function colorChange(){
        body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')'
        if(red == 130 && green != 130 && blue == 0){
            green++;
        }else if(red != 0 && green == 130 && blue == 0){
            red--;
        }else if(red == 0 && green == 130 && blue != 130){
            blue++;
        }else if(red == 0 && green != 0 && blue == 130){
            green--;
        }else if(red != 130 && green == 0 && blue == 130){
            red++;
        }else if(red == 130 && green == 0 && blue != 0){
            blue--;
        }
    }
}

function chooseKey(){
    randKey = document.getElementById(keysArr[Math.floor(Math.random() * keysArr.length)])
    randKey.className += ' selected'

    document.addEventListener("keydown", function(key){
        if(key.code == randKey.id){
            rightMusic.currentTime = 0;
            rightMusic.volume=1;
            rightMusic.play();
            randKey.classList.remove("selected")
            randKey = document.getElementById(keysArr[Math.floor(Math.random() * keysArr.length)])
            randKey.className += ' selected'
            LGBG()
            setTimeout(normalBG, 200)
            setTimeout(LGBG, 400)
            setTimeout(normalBG, 600)
            key = 0
        }else if(key.code != randKey.id){
            wrongMusic.currentTime = 0;
            wrongMusic.volume=1;
            wrongMusic.play();
            let falseKey = document.getElementById(key.code)
            falseKey.className += ' hit'
            redBG()
            setTimeout(normalBG, 200)
            setTimeout(redBG, 400)
            setTimeout(normalBG, 600)
            setTimeout(function(){
                falseKey.classList.remove("hit")
            }, 500)
            key = 0
        }
    })
}

function LGBG(){
    body.style.backgroundColor = "#158528"
}

function normalBG(){
    body.style.backgroundColor = "#151728"
}

function redBG(){
    body.style.backgroundColor = "#851728"
}