$( document ).ready(function() {
   
   let clock = document.getElementById('clock');


function getTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    if(h < 10) {h = '0' + h;}
    if(m < 10) {m = '0' + m;}
    if(s < 10) {s = '0' + s;}
    
    clock.innerHTML = (h + ':' + m + ':' + s);
}

getTime();
let timeInterval = setInterval(getTime, 1000);

});