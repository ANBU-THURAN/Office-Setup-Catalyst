const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));


'use strict';

        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const snap = document.getElementById('snap');
        const errorMsgElement = document.getElementById('span#ErrorMsg');
        
        var ctx = canvas.getContext("2d");
        ctx.font = "30px Arial";
        ctx.fillText("Your image will appear here", 120, 240);
        const constraints = {
            audio: true,
            video:{
                width:640,height: 480
            }
        };
        async function init(){
            try{
                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                handleSuccess(stream);
            }
            catch{
                errorMsgElement.innerHTML = 'navigator.getUserMedia.error:${e.toString()}';
            }
        }

        function handleSuccess(stream){
            window.stream = stream;
            video.srcObject = stream;
        }
        init();

        var context = canvas.getContext('2d');
        snap.addEventListener("click",function(){
            context.drawImage(video,0,0,640,480);
        });

