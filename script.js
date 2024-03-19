let startBtn=document.getElementById('start');
let resetBtn=document.getElementById('reset');
let stopBtn=document.getElementById('stop');

let hour=0;
let minute=0;
let second=0;
let count=0;

startBtn.addEventListener('click', function(){
    timer=true;
    stopwatch();
});
resetBtn.addEventListener('click', function(){
    timer=false;
    hour=0;
    minute=0;
    second=0;
    count=0;
    document.getElementById('hr').innerHTML="00";
    document.getElementById('min').innerHTML="00";
    document.getElementById('sec').innerHTML="00";
    document.getElementById('count').innerHTML="00";
});
stopBtn.addEventListener('click', function(){
    timer=false;
});

function stopwatch(){
    if(timer){
        count++;
    
    if(count==100){
        second++;
        count=0;
    }
    if(second==60){
        minute++;
        second=0;
    }
    if(minute==60){
        hour++;
        minute=0
        second=0;
    }

    let hourString=hour;
    let minString=minute;
    let secString=second;
    let countString=count;

    if(hour<10){
        hourString="0"+hourString;
    }
    if(minute<10){
        minString="0"+minString;
    }
    if(second<10){
        secString="0"+secString;
    }
    if(count<10){
        countString="0"+countString;
    }
    document.getElementById('hr').innerHTML=hourString;
    document.getElementById('min').innerHTML=minString;
    document.getElementById('sec').innerHTML=secString;
    document.getElementById('count').innerHTML=countString;
    setTimeout(stopwatch,10);
    }
}