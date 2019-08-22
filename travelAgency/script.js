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

   /////////////////////////////////////////////tabulation////////////////////////////

   let tab = (idn, n) => { 
        
    t1 = "Мы - команда профессионалов в туризме с опытом работы более 10 \
     лет и опытом личных путешествий более чем в 45 странах мира. Офис компании \
     в Акапулько стал третьим офисом сети наряду с офисами, открытыми ранее в \
     Афинах и Лондоне. Мы знаем об отдыхе практически все, продолжая \
     совершенствовать свои знания  каждый год. Мы много путешествуем и открываем новые \
     страны и маршруты, чтобы предложить их Вам."
   
     t2 = " В свою работу мы вкладываем душу и отдаем делу максимум энергии. Каждое \
   путешествие мы планируем для Вас так, словно художник рисует свою картину. Мы всегда \
   четко прорисовываем все детали и делаем яркие акценты на том, что важно именно для Вас."
   
   t3 = "Мы рады предложить всю палитру туров на выбор – от стандартных пакетных \
   вариантов до индивидуальных путешествий на любой вкус и бюджет. Нашими партнерами \
   являются более 70 ведущих мировых компаний, среди которых туроператоры, сети отелей, \
   круизные компании, авиакомпании, системы бронирования услуг и профессиональные гиды."
   
     arrObj = [
   { t:t1, b:'Наша команда', l:'#teams' },
   { t:t2, b:'Наши туры', l:'#trw' },
   { t:t3, b:'Горящие путевки', l:'#hot'}
   ]
   
                   menu = document.querySelectorAll('.about__menu>button');
                   menu.forEach(function(item, i, menu) { item.removeAttribute('class')  })
   
                                   txt.innerHTML = arrObj[n].t
                                   lnk.innerHTML = arrObj[n].b
                                   lnk.href = arrObj[n].l
                                   idn.setAttribute('class','colorOn')
                       }

//////////////////////////////////////////////scrollTop///////////////////////////////////

function scrl() {   

    let w = document.documentElement.clientWidth // ширина окна
    let h = document.documentElement.clientHeight // выстота окна

      let pw = w - 80
      let ph = h - 80

    if (pageYOffset > h) { 

        arr.style.top = ph+"px"
        arr.style.left = pw+"px"

        upward.style.display = "block"
        
        
                }
       else upward.style.display = ''
 }

window.addEventListener('scroll', scrl );

////////////////////////////////