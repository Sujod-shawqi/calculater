function displayTime(){
    let date_time = new Date();
    let hours = date_time.getHours();
   let miniuts = date_time .getMinutes();
    let seconds = date_time .getSeconds();
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("miniuts").innerHTML=miniuts;
    document.getElementById("second").innerHTML=seconds;

}
setInterval=(displayTime, 10);
let hours = 0;
let miniuts = 0;
let second = 0;

function displayTime(){
    second++;
    if(second/60 === 1){
        second=0;
        miniuts++;
    }
    if(miniuts/60 === 1){
        miniuts=0;
        hours++;
    }
}
