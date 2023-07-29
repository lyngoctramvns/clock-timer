/*
    Author: Ly Ngoc Tram
    Date: 15/03/2018
    Purpose of project: Create a Timer that would redirect to attendance sheet after timeout.
*/

function countDown(duration,display){
    //Set variable timer with duration, minutes and seconds
    var timer = duration, minutes, seconds;

//setInterval for the clock to display every second.
var intervalTime = setInterval(function clockCountDown(){
    
    //Set minutes and seconds as division of 60 of timer
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10)

    //Tenary operator to add 0 before mins and seconds if they are single digit numbers

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    //display the content of minutes & second
    display.textContent = minutes + ":" + seconds;

    //minus timer 1 every second
    timer-=1;

    //action to do when timer ends (recursively stop interval & redirect to rollcall)
    if(timer <= 0){
        clearInterval(intervalTime)
        window.location.replace("./table.html")
    }

},1000);

};

window.onload = function startTimer(){
    //Time count down = 10 mins
    var tenMins = 60 * 1
    var display = document.getElementById("time")
    document.getElementById("start").addEventListener('click', function (){
        countDown(tenMins,display)
    })

}
