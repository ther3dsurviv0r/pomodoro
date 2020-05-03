//Author: ther3dsurviv0r
var running = false;
var on = false;
var soundIsOn = true;
var timer, audio;
var setMin=25;
function init(){
    var second=document.getElementById("timer");
    var min=document.getElementById("min");
    if(!running){
        second.innerHTML="59";
	if(setMin<10){
		min.innerHTML="0"+(setMin-1);
    }else{
		min.innerHTML=setMin-1;
	}
        running=true;
    }else{
        if(min.innerHTML<=0 && second.innerHTML<=0){
            toggle();
            if(soundIsOn){
                audio = new Audio('sound/beep.mp3');
                audio.play();
            }
        }else{
            if(second.innerHTML>0){
                second.innerHTML= parseInt(second.innerHTML) - 1;
                if(second.innerHTML<10){
                    second.innerHTML="0"+second.innerHTML;
                }
            }else{
                second.innerHTML="59";
                min.innerHTML= parseInt(min.innerHTML) - 1;
                if(min.innerHTML<10){
                    min.innerHTML="0"+min.innerHTML;
                }
            }
        }
    }
}

function reset(){
    on=true;
    toggle();
    var second=document.getElementById("timer");
    var min=document.getElementById("min");
    running=false;
    second.innerHTML="00";
	if(setMin<10){
		min.innerHTML="0"+setMin;
    }else{
		min.innerHTML=setMin;
	}
}

function soundToggle(){
    if(soundIsOn){
        document.getElementById("btnsound").src = "image/soundoff.png";
        soundIsOn=false;
    }else{
        document.getElementById("btnsound").src = "image/soundon.png";
        soundIsOn=true;
    }
}

function toggle(){
    if(!on){
        timer = setInterval("init();",1000);
        document.getElementById("btn").src = "image/pause.png";
        on=true;
    }else{
        clearInterval(timer);
        document.getElementById("btn").src = "image/play.png";    
        on=false;   
    }
}

function changeTime(){
    if(document.getElementById("min").innerHTML==25){
        setMin=5;
        document.body.style.backgroundColor="cornflowerblue";
        reset();
    }else if(document.getElementById("min").innerHTML==5){
        setMin=25;
        document.body.style.backgroundColor="tomato";
        reset();
    }else if(document.getElementById("min").innerHTML==0){
		reset();
		changeTime();
	}
}