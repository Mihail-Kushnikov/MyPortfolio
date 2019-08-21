

var cnv = document.getElementById("canvas");
var ctx = cnv.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeBottom = new Image();
var pipeUp = new Image();
var gap = 90;
var grav = 1.5;
var xPos = 20;
var yPos = 180;
var pipe = [];
var score = 0


pipe[0] = {
    x : cnv.width,
    y : 0
}

bird.src = "img/bird.png"; 
bg.src = "img/bg.png"; 
fg.src = "img/fg.png"; 
pipeBottom.src = "img/pipeBottom.png"; 
pipeUp.src = "img/pipeUp.png"; 



 

function drow () {
    ctx.font = "24px Calibri";
    ctx.fillStyle = "#0000000";
    ctx.fillText("Score: " + score, 20, 20);
ctx.drawImage (bg, 0, 0);
ctx.drawImage (fg, 0, cnv.height - fg.height);
for(var i = 0; i < pipe.length; i++) {
    ctx.drawImage (pipeUp, pipe[i].x, pipe[i].y);  
    ctx.drawImage (pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);  
    pipe[i].x--;
if (pipe[i].x == 125){
        pipe.push({
            x : cnv.width,
            y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
        })
    } 
    if (xPos + bird.width >= pipe[i].x
        && xPos <= pipe[i].x + pipeUp.width
        && (yPos <= pipe[i].y + pipeUp.height
        || yPos + bird.height >= pipeUp.height + gap)|| yPos + bird.height >= cnv.height - fg.height)
        location.reload();
if (pipe[i].x == 5) {
        score++;
    }
} 
ctx.drawImage (bird, xPos, yPos);
yPos += grav;
requestAnimationFrame (drow);

}
addEventListener("keydown", moveUp);
function moveUp() {
yPos -= 20;
 }

pipeUp.onload = drow;
 
function closefb(){
    canvas.remove()
    
}



