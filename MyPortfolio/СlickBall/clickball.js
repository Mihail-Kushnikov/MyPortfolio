function clickball(){

theme.style.textCss ="position: relative;\
                      width: 320px;\
                      height: 1000px;\
                      margin: 0 auto;\
                      top: 413px;"

var theme1 = document.createElement('div')
theme1.setAttribute('id', 'theme1');
theme.appendChild(theme1)

var gameball = document.createElement('div');
gameball.setAttribute('class', 'game');
theme1.appendChild(gameball)

var scoreball = document.createElement('strong')
scoreball.setAttribute('id','score')
scoreball.innerHTML = "You score: 0/10"
theme1.appendChild(scoreball)

var menuball = document.createElement("div")
menuball.setAttribute('class','menu')
theme1.appendChild(menuball)

var imgball = document.createElement('img')
imgball.src = 'СlickBall/logo.png'
menuball.appendChild(imgball)

var nameClickBall = document.createElement('h1')
nameClickBall.innerHTML="Click Ball"
menuball.appendChild(nameClickBall);

var startball = document.createElement('input')
startball.setAttribute('type', 'button')
startball.setAttribute('value', 'Start')
startball.setAttribute('onClick', 'start()')
startball.setAttribute('class', 'menu__start')
menuball.appendChild(startball)

var restartball = document.createElement('input')
restartball.setAttribute('type', 'button')
restartball.setAttribute('value', 'Restart')
restartball.setAttribute('onClick', 'start()')
theme1.appendChild(restartball)

var closeball = document.createElement('input')
closeball.setAttribute('type', 'button')
closeball.setAttribute('value', 'Close')
closeball.setAttribute('onClick', 'closeball()')
closeball.style.top = -100+"px"
theme1.appendChild(closeball)


s = 0
    blball = document.querySelector('.block.ball')
    bl = document.querySelector('.block')
    game = document.querySelector('.game');
    p = 1;

    for (i=0;i<15;i++){
        game.innerHTML += '<div class="block"></div>'
    }
  
} 


 function start(){
      
        document.querySelector(".menu").style.display = "none"

     for(j=0;j<10;j++){ window.setTimeout(function drow(){
   allBall = document.querySelectorAll(".block")
        r = Math.floor(Math.random()*15)+0
       allBall[r].classList.add('ball')
      // blball.classList.remove('ball')
       console.log(allBall[r])
       
       window.setTimeout( function deleteDrow (){
        allBall[r].classList.remove('ball') 
       },600)
   
  },1000*(j+1))

    }


    game.onclick = function(event){
     var  v = 1
      if( event.target.className=="block ball" ){v = 1+ s++}
      else v = s+0 ;
      document.getElementById("score").innerHTML = "You score: "+v+"/10"
      console.log(v)
      
   }
   
}

function closeball(){
   theme.style.textCss ="position: relative;\
                      width: 0;\
                      height: 0;\
                      margin: 0 auto;\
                      top: 0;"

   theme1.remove()
     
      
     
     
      
      
     
}