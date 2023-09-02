var timer = 60;
var score = 0;
var hitrn = 0;

function scoreCount(){
    score += 10;
    document.querySelector("#score").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

for(var i=1; i<=207; i++){
    let rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var tstop = setInterval(() =>{
       if(timer > 0)
       {
            timer--;
            document.querySelector("#timerUI").textContent = timer;
       }
       else{
        clearInterval(tstop);
        document.querySelector("#pbtm").innerHTML = `<h1>Time Up!!!!</h1> <br> <h1>Your Score : ${hitrn}</h1>`
        //document.querySelector("#pbtm").innerHTML = ``
       }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click",(e) => {
    let val = Number(e.target.textContent);
    if(val === hitrn){
        scoreCount();
        makeBubble();
        getNewHit();
    }
    else{
        makeBubble();
        getNewHit();
    }
})
getNewHit()
runTimer();
makeBubble();