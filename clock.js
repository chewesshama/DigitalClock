function showTime(){
    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";

    if(hour > 11){
        hour = hour - 12;
        session = "PM";
    }

    hour = (hour == 0)? hour + 12: hour;
    hour = (hour < 10)? "0" + hour: hour;
    minutes = (minutes < 10)? "0" + minutes: minutes;
    seconds = (seconds < 10)? "0" + seconds: seconds;

    var time = hour + ":" + minutes + ":" + seconds + " " + session;

    document.getElementById("clock").innerHTML = time;
    document.getElementById("clock").textContent = time;

    setTimeout(showTime, 1000);

}

showTime()
