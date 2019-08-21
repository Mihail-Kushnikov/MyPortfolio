var maxim, mmedia, play, bar, progress, mute, volume, loop;
        function initiate(){
            maxim = 400;
            mmedia = document.getElementById('media');
            play = document.getElementById('play');
            bar = document.getElementById('bar');
            progress = document.getElementById('progress');
            mute = document.getElementById('mute');
            volume = document.getElementById('volume');
            play.addEventListener('click', push)
            bar.addEventListener('click', move)
            mute.addEventListener('click', sound)
            volume.addEventListener('click', level)
        }
    addEventListener('load', initiate);
    function push(){
    //    alert('push')
        if (!mmedia.paused && !mmedia.ended){
            mmedia.pause();
            play.value = 'Восп.';
            clearInterval(loop);
        }
        else {
            mmedia.play();
            play.value= 'Пауза';
            loop = setInterval(status, 1000);
        }
    }
    function status(){
        if (!mmedia.ended){
            var size = parseInt(mmedia.currentTime*maxim/mmedia.duration);
            progress.style.width = size+'px'
        }
        else{
            progress.style.width = '0px';
            play.innerHTML = 'Воспр.';
            clearInterval(loop)
        }
    }
    function move(e){
        //alert('move');
        if(!mmedia.paused && !mmedia.ended){
            var mouseX = e.pageX - bar.offsetLeft;
            var newtime = mouseX * mmedia.duration / maxim;
            mmedia.currentTime = newtime;
            progress.style.width = mouseX+'px';
        }
    }
    function sound(){
        // alert('sound')
        if (mute.value == "Звук"){
            mmedia.muted = true;
            mute.value = "Выкл."
        }else{
            mmedia.muted = false;
            mute.value = "Звук"
        }
    }
    function level(){
        // alert('volume')
        mmedia.value = volume.value;
    }




    /////////////////////////////Слайдер/////////////////////////////////////

   //let i=1; var p = 7;
   //function func(){if(++i>p)i=1;
   //p1.style.opacity = '0'
   //setTimeout('pick()', 6000)
   //pick = () =>{
   //    p1.style.background = "url(images/img"+i+"b.jpg) no-repeat"

   //    p1.style.opacity = '1'
   //}
   //    timerId = setTimeout('func()', 6000);
   //}
   //setTimeout('func()', 6000)    

   let i=1; var p = 6;
   function func(){if(++i>p)i=1;
   setTimeout('pick()', 4000)
   pick = () =>{
       if(i%2==0){
        p2.style.opacity = 1
        p2.style.background = "url(images/img"+i+"b.jpg) no-repeat";
        // p2.style.zIndex = i*(-1);
        setTimeout(function (){
            p2.style.transition= 1+'s'
            p2.style.opacity=0},4000)
    
        }else{
        p1.style.opacity = 1
        p1.style.background = "url(images/img"+i+"b.jpg) no-repeat"
        // p1.style.zIndex = i*(-1);
        setTimeout(function(){
            p1.style.transition= 1+'s'
            p1.style.opacity=0},4000)
        
        
       }
   }
      timerId = setTimeout('func()', 4000);
   }
   setTimeout('func()', 4000)   

   img = () =>{
       open = document.querySelector('.openimg');

       open.style.display = 'block'
       open.addEventListener('click', ()=> { open.style.display = 'none' });
    
   }