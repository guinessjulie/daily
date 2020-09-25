
import dates from './dates.js';

const newYears = '1 jan 2021'
const specialDate ='13 Oct 1993'
const specialDateName = "June's birthday"
const monthsEl  = document.getElementById('months');
const daysEl  = document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secsEl= document.getElementById('seconds');
const dateTitle = document.querySelector('h1');

function selectDueDate()
{
    const len = dates.length;
    let rand = Math.floor( Math.random()*5);
    let selDate = dates[rand];
    selDate = dates[9];

    return selDate;
}

function countDown(){
    let selectedDate = selectDueDate();
    const newDueDate = nextDDay(selectedDate.date);

    const currentDate = new Date();
    const totSeconds = (newDueDate - currentDate) / 1000;
    const days = Math.floor(totSeconds / 3600 / 24);
    const months = Math.floor(totSeconds/3600/24/30);
    const hours = Math.floor(totSeconds/3600)%24;
    const minute = Math.floor(totSeconds/60) %60;
    const seconds = Math.floor(totSeconds )%60;

    dateTitle.innerHTML = selectedDate.name;
    monthsEl.innerHTML = months
    daysEl.innerHTML  = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML  =formatTime(minute);
    secsEl.innerHTML  =formatTime(seconds);
}

function nextDDay(dDay){
    const today = new Date();
    const nextYear = today.getFullYear()+1;
    let yy;
    if( dDay.getMonth() > today.getMonth()){
        yy = today.getFullYear();
    } else if( dDay.getMonth() < today.getMonth()){
        yy =  nextYear;
    } else {
        if(dDay.getDate() > today.getDate()){ //  아직 안지났으면
            yy = today.getFullYear();
        }
        else if (dDay.getDate() < today.getDate()){
            yy = nextYear;
        }
        else {
            yy = today.getFullYear();
        }
    }
    return new Date(yy,  dDay.getMonth(), dDay.getDate(), 17, 0, 0);
}

function formatTime(time){
    return (time < 10) ? `0${time}` : time;
}
countDown();
setInterval(countDown, 5000);