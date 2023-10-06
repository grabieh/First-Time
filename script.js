const dayWeMet = "2022-04-25T10:15:00";

const daysH = document.getElementById("days");
const hoursH = document.getElementById("hours");
const minsH = document.getElementById("minutes"); 
const secH = document.getElementById("seconds");

function count() {
    
    const OldDate = new Date(dayWeMet);
    const NewDate = new Date();
    
    const totalSeconds = (NewDate - OldDate) / 1000 ;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 % 24);
    const mins = Math.floor(totalSeconds /60 % 60);
    const seconds = Math.floor(totalSeconds % 60);
    
    daysH.innerHTML = days;
    hoursH.innerHTML = modDate(hours);
    minsH.innerHTML = modDate(mins); 
    secH.innerHTML = modDate(seconds);

}

function modDate(time) {

    return time < 10 ? ("0" + time) : time;
}

count();

setInterval(count, 1000);