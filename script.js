function makeBubble(){
    var clutter = "";

for(var i=1; i<=207; i++){
    let rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

var timer = 60;
function runTimer(){
    setInterval(() =>{
       
    }, 1000)
}
makeBubble();