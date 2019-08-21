// var text = "Hey! I’m<br><strong>Kushnikov Mikhail</strong><br>a frontend developer"
// var i = 0

        
//     function print (){
//         i++;
//         if(i<=text.length){
//             document.getElementById("work").innerHTML = text.substr(0, i);
//             setTimeout (print,40);
//         }
//     };
           
//  print()    

var options = {
  strings: ['<strong> Kushnikov Mikhail</strong>\nFrontend developer'],
  typeSpeed: 40,
  
}
var typed = new Typed(".element", options);
