var a = document.getElementById("min");
var b = document.getElementById("sec");
var c = document.getElementById("mili");



var pau;

function timer() {
    var min = Number(a.value);
    var sec = Number(b.value);
    var milisec = Number(c.value);

    if (milisec >= 0) {
        if (milisec > 0) {
            --milisec;
            var displaymili = document.getElementById("mili");
            displaymili.value = Number(milisec);
        }
        else if (sec > 0 && milisec == 0) {
            --sec;
            milisec = 100;
            var displaymili = document.getElementById("mili");
            displaymili.value = Number(milisec);
            var displaysec = document.getElementById("sec");
            displaysec.value = Number(sec);

        }
        else if (min > 0 && sec == 0) {
            --min
            sec = 60;
            var displaysec = document.getElementById("sec");
            displaysec.value = Number(sec);
            var displaymin = document.getElementById("min");
            displaymin.value = Number(min);
            console.log("mai min hn");
        }
    }

}


function start() {
        var a = document.getElementById("start").disabled = true;
        var b = document.getElementById("start");
        b.innerText = "Disabled";
        pau = setInterval(timer, 10); 
}

function pause() {
    document.getElementById("start").disabled = false;
    var b = document.getElementById("start");
    b.innerText = "Start";
    clearInterval(pau);
}
function rest() {
    document.getElementById("start").disabled = false;
    var b = document.getElementById("start");
    b.innerText = "Start";
    pause()
    window.location.href = "index.html"
}