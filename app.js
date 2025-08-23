let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let h2 = document.querySelector("h2");
let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game Started");
        started = true;
    }
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash"); // <-------try by adding dot to like .flash
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("user-flash"); // <-------try by adding dot to like .flash
    setTimeout(function(){
        btn.classList.remove("user-flash");
    },250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`); // Accessing class of this random button
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("Current Level : ",level);
    if(userSeq[idx] === gameSeq[idx]){ // <------ Try it with ==
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game over!<b>Your Score was ${level}</b> <br>Press any Key to start again`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}