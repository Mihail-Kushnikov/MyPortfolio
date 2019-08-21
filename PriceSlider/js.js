var pr1 = document.querySelector('.price1');
var pr2 = document.querySelector('.price2');
var pr3 = document.querySelector('.price3');




function price1 (){
     var drow = setInterval (drow1,1)
    
     let grav = 50
     
     
    function drow1(){
        
        if (grav <= 400){
            ++grav 
            pr1.style.left =  grav+'px';
        }
        else {
            
            clearInterval(drow)
            setInterval(function removes(){
                clearInterval(drow)
                if(grav <= 0){grav = 0}
                else {
                     grav--;
                pr1.style.left =  grav+'px';
                }
            },1)
            }
        }
       setTimeout(function index1(){

   
    pr1.style.zIndex = 3
    pr2.style.zIndex = 2
    pr3.style.zIndex = 1
document.querySelector('.conteiner1').classList.add('opn')

    
    document.querySelector('.price3__text0').remove()      
    document.querySelector('.price3__text1').remove()
    document.querySelector('.price3__text2').remove()
    document.querySelector('.price3__text3').remove()
    document.querySelector('.price3__text4').remove()
    document.querySelector('.price3__text5').remove()
    document.querySelector('.price3__btn').remove()

    
    
    document.querySelector('.price2__text1').remove()
    document.querySelector('.price2__text2').remove()
    document.querySelector('.price2__text3').remove()
    document.querySelector('.price2__text4').remove()
    document.querySelector('.price2__text5').remove()
    document.querySelector('.price2__text6').remove()
    document.querySelector('.price2__btn').remove()

   

         },1300)
    }
        
  


    function price2 (){
        let drow = setInterval (drow2,1)
       
        let grav = 50
       
        
       function drow2(){
           
           if (grav <= 400){
               ++grav 
               pr2.style.left =  grav+'px';
           }
           else {
               
               clearInterval(drow)
               setInterval(function removes(){
                   clearInterval(drow)
                   if(grav <= 0){grav = 0}
                   else {
                        grav--;
                   pr2.style.left =  grav+'px';
                   }
               },1)
               }
           }
          setTimeout(function index2(){
   
         
       pr1.style.zIndex = 2
       pr2.style.zIndex = 3
       pr3.style.zIndex = 1

    
    for (i=1;i<=6;i++){
        pr2.innerHTML += "<div class='price2__text"+i+"'></div>"
        }
        // document.querySelector('.price2__text1').innerHTML = "GOLD"
        // document.querySelector('.price2__text2').innerHTML = "$99"
        // document.querySelector('.price2__text3').innerHTML = "YEAR"
        // document.querySelector('.price2__text4').innerHTML = "Personal Account"
        // document.querySelector('.price2__text5').innerHTML = "50 GB Discspace"
        // document.querySelector('.price2__text6').innerHTML = "500 Uploads per day"
document.querySelector('.price2__text1').innerHTML = "GOLD"       
  document.querySelector('.price2__text1').style.cssText = "position: relative;\
                                                          font-weight: bold;\
                                                          font-size: 18px;\
                                                          line-height: 27px;\
                                                          align-items: center;\
                                                          text-align: center;\
                                                          letter-spacing: 1px;\
                                                          color: #4B4B4B;"

  document.querySelector('.price2__text2').innerHTML = "$99" 
  document.querySelector('.price2__text2').style.cssText = "position: relative;\
                                                              left: 125px;\
                                                              font-size: 64px;\
                                                              line-height: 48px;\
                                                              letter-spacing: -2.32727px;\
                                                              color: #4B4B4B;"

  document.querySelector('.price2__text3').innerHTML = "YEAR"  
  document.querySelector('.price2__text3').style.cssText = "position: relative;\
                                                            left: 158px;\
                                                            font-size: 18px;\
                                                            line-height: 27px;\
                                                            color: #4B4B4B;"

  document.querySelector('.price2__text4').innerHTML = "Personal Account" 
  document.querySelector('.price2__text4').style.cssText = "position: relative;\
                                                            left: 123px;\
                                                            font-size: 16px;\
                                                            line-height: 24px;\
                                                            color: #4B4B4B;" 
                                                            
  document.querySelector('.price2__text5').innerHTML = "50 GB Discspace"
  document.querySelector('.price2__text5').style.cssText = "position: relative;\
                                                            left: 127px;\
                                                            font-size: 16px;\
                                                            line-height: 24px;\
                                                            color: #4B4B4B;"                                                         
                                                                                                                    
  document.querySelector('.price2__text6').innerHTML = "500 Uploads per day"
  document.querySelector('.price2__text6').style.cssText = "position: relative;\
                                                            left: 117px;\
                                                            font-size: 16px;\
                                                            line-height: 24px;\
                                                            color: #4B4B4B;"                                                        
 var btn = document.createElement('input')
     btn.setAttribute('type','button');
     btn.setAttribute('class','price2__btn');
     btn.setAttribute('value','PURCHASE');     btn.style.cssText = "background: #4B4B4B;\
                       color :white;\
                       position:relative;\
                       left:83px;\
                       grid-row-start:7"                     
     pr2.appendChild(btn)


    document.querySelector('.conteiner1').classList.remove('opn')  
    
    document.querySelector('.price3__text0').remove()
    document.querySelector('.price3__text1').remove()
    document.querySelector('.price3__text2').remove()
    document.querySelector('.price3__text3').remove()
    document.querySelector('.price3__text4').remove()
    document.querySelector('.price3__text5').remove()
    document.querySelector('.price3__btn').remove()

        
            },1300)

            
       }
    


       function price3 (){
        let drow = setInterval (drow3,1)
       
        let grav = 50
        
        
       function drow3(){
           
           if (grav <= 400){
               ++grav 
               pr3.style.left =  grav+'px';
           }
           else {
               
               clearInterval(drow)
               setInterval(function removes(){
                   clearInterval(drow)
                   if(grav <= 0){grav = 0}
                   else {
                        grav--;
                   pr3.style.left =  grav+'px';
                   }
               },1)
               }
           }
          setTimeout(function index3(){
   
        btn3 = document.createElement('input')
        btn3.setAttribute('type','button');
        btn3.setAttribute('value','PURCHASE');
        btn3.setAttribute('class','price3__btn');
        pr3.appendChild(btn3)
      
        for (j=1; j<=6; j++){
        div3 = document.createElement('div')
        pr3.appendChild(div3);
        }
       allDiv = pr3.getElementsByTagName('div')
       console.log(allDiv)
        for (n=0;n<allDiv.length;n++){  
            allDiv[n].setAttribute('class','price3__text'+n+'');
        }

        pr1.style.zIndex = 1
        pr2.style.zIndex = 2
        pr3.style.zIndex = 3

        document.querySelector('.price3__text0').innerHTML = "PLATINUM "
        document.querySelector('.price3__text1').innerHTML = "$299"
        document.querySelector('.price3__text2').innerHTML = "YEAR"
        document.querySelector('.price3__text3').innerHTML = "Team Account"
        document.querySelector('.price3__text4').innerHTML = "500 GB Discspace"
        document.querySelector('.price3__text5').innerHTML = "Unlimited Uploads per day"
        
        document.querySelector('.conteiner1').classList.remove('opn')

       document.querySelector('.price2__text1').remove()
       document.querySelector('.price2__text2').remove()
       document.querySelector('.price2__text3').remove()
       document.querySelector('.price2__text4').remove()
       document.querySelector('.price2__text5').remove()
       document.querySelector('.price2__text6').remove()
       document.querySelector('.price2__btn').remove()

        

            },1300)
      

       }
    
