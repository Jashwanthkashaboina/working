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

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },1000);
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;

    let randIndx = Math.floor(Math.random()*3);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`); // Accessing class of this random button
    // choose any random button
    console.log(randIndx);
    console.log(randColor);
    console.log(randBtn);
    btnFlash(randBtn);
}

