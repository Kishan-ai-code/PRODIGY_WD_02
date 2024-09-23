const min=document.querySelector(".min");
const sec= document.querySelector(".sec");
const msec= document.querySelector(".msec");
const desc=document.querySelector(".des");

const playBtn=document.querySelector(".start");
const resetBtn=document.querySelector(".stop");
const lapBtn=document.querySelector(".pause");
const clearBtn=document.querySelector(".clearbtn");

let minCounter=0;
let secCounter=0;
let msecCounter=0;

let mins;
let secs;
let msecs;



const play = () =>{


    if (playBtn.innerHTML==="start"){
        
        playBtn.innerHTML="stop";

        mins = setInterval(() =>{
            min.innerHTML=`${++minCounter} :`;
            if (minCounter<10){
                min.innerHTML=`0${minCounter} :`;
            }
        } , 60*1000); 

        secs= setInterval(()=>{
            if(secCounter===59){
                secCounter=1;
            }
            sec.innerHTML=`${++secCounter} :`;
            if (secCounter<10){
                sec.innerHTML=`0${secCounter} :`;
            }

        },1000);


        msecs=setInterval(()=>{
            if(msecCounter===99){
                msecCounter=0;
            }

            msec.innerHTML=`${++msecCounter}`;
            if (msecCounter<10){
                msec.innerHTML=`0${msecCounter}`;
            }
        }, 10);
    }
    else{
        playBtn.innerHTML="start";
        clearInterval(mins);
        clearInterval(secs);
        clearInterval(msecs);
    }


}

const reset=() =>{
    clearInterval(min);
    clearInterval(sec);
    clearInterval(msec);

    minCounter=0;
    secCounter=0;
    msecCounter=0;


    min.innerHTML="00 :";
    sec.innerHTML="00 :";
    msec.innerHTML="00";


};


const lap = () => {
    const li= document.createElement("li");
    const number=document.createElement("span");
    const timeStamp=document.createElement("span");


    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time-stamp");

    timeStamp.innerHTML=`${minCounter}: ${secCounter}: ${msecCounter}`;

    
    li.append(number, timeStamp);
    desc.prepend(li);
    clearBtn.classList.remove("laptime");
}


const clear = () => {
    desc.innerHTML=""
    desc.append(clearBtn);
    clearBtn.classList.add("laptime");
}

playBtn.addEventListener('click', play);
resetBtn.addEventListener('click', reset);
clearBtn.addEventListener('click', clear);
lapBtn.addEventListener('click', lap);

var watch= new stopwatchOn();


function start(){
    playBtn.textContent='stop';
    playBtn.classList.toggle('on');
    watch.start();
}

function stop(){
    playBtn.textContent='start';
    playBtn.classList.toggle('on');
    watch.stop();
}

function stopwatchOn(){
    playBtn.textContent='start';
    playBtn.classList.toggle('on');
    watch.stop();
    watch.reset();
}