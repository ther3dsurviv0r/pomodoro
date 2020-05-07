var timerIsOn = false;
var soundIsOn = true;
var timer,soundButton,placeMinute,placeSecond,timer25,timer5,active;


class Time{
    constructor(timerName,timerDurationMin,timerDurationSec,timerAudio,timerBackground){
        this.name=timerName;
        this.durationMin=timerDurationMin;
        this.durationSec=timerDurationSec;
        this.audio = new Audio(timerAudio);
        this.background=timerBackground;
    }

    setParameters(){
        placeMinute.innerHTML=this.timerSet(this.durationMin);
        placeSecond.innerHTML=this.timerSet(this.durationSec);
        document.body.style.backgroundColor=this.background;
        active=this.name;
    }

    tick(){
        if(parseInt(this.durationSec)<=0){
            if(parseInt(this.durationMin)<=0){
                stop();
                if(soundIsOn){
                    this.audio.play();
                }
            }else{
                this.durationMin= parseInt(this.durationMin)-1;
                this.durationSec=59;
            }
        }else{
            this.durationSec=parseInt(this.durationSec)-1;
        }
        this.setParameters();
    }

    timerSet(value){
        if(parseInt(value)<10){
            return "0"+value;
        }
        return value;
    }
}


function init(){
    placeSecond=document.getElementById("sec");
    placeMinute=document.getElementById("min");
	soundButton=document.getElementById("btnsound");
    timer25 = new Time("Work",25,0,"sound/victory.mp3","tomato");
    timer5 = new Time("Break",5,0,"sound/beep.mp3","cornflowerblue");
    timer25.setParameters();
    active=timer25.name;
}


function toggle(){
    if(timerIsOn){
        stop();
    }else{
        start();
    }
}


function start(){
    if(active==timer25.name){
        timer = setInterval("timer25.tick();",1000);
    }else if(active==timer5.name){
        timer = setInterval("timer5.tick();",1000);
    }else{
        alert("Error!");
    }
    document.getElementById("btn").src = "image/pause.png";
    timerIsOn=true;
}


function stop(){
    clearInterval(timer);
    document.getElementById("btn").src = "image/play.png";
    timerIsOn=false;
}


function reset(){
    stop();
    timer25.durationMin=25;
    timer25.durationSec=0;
    timer5.durationMin=5;
    timer5.durationSec=0;
    if(active==timer25.name){
        timer25.setParameters();
    }else if(active==timer5.name){
        timer5.setParameters();
    }else{
        alert("Error!");
    }
}


function changeTime(){
    switch(active){
        case timer25.name:
            timer5.setParameters();
            reset();
            break;
        case timer5.name:
            timer25.setParameters();
            reset();
            break;
        default:
            alert("Reset the timer and try again.");
    }
}


function soundToggle(){
    if(soundIsOn){
        soundButton.src = "image/soundoff.png";
        soundIsOn=false;
    }else{
        soundButton.src = "image/soundon.png";
        soundIsOn=true;
    }
}