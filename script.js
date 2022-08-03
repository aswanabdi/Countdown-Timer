const daysEl = documents.getElementbyID("days");
const hoursEl = documents.getElementbyID("hours");
const minsEl = documents.getElementbyID("mins");
const secondsEl = documents.getElementbyID("seconds");

const newYears= "1 jan 2023"
function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate = new Date();

    const totalseconds =(newYearsDate - currentDate)/ 1000;

    const days= Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds / 3600)%24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds)% 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
   

}

function formatTime(time){
    return time <10 ? `0 ${time}` : time;
}
//inital call
countdown();

setInterval(countdown,1000);