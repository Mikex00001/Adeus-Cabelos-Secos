var counter, min = 19,
    sec = 60;

function timer() {
    0 === sec ? (min--, sec = 59) : sec--, min < 0 ? clearInterval(counter) : 
    document.getElementById("timer").innerHTML = "ESTE VIDEO VAI EXPIRAR EM " + (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec) + " !!!!";
    if(min == 00 && sec == 00){
        document.getElementById("timer").innerHTML = "ADIQUIRA AGORA !!!";
    }
}
window.onload = function() {
    counter = setInterval(timer, 1e3)
};
var video = document.querySelector("iframe");
var text = document.querySelector("text");
video.addEventListener("click", function () {
  text.hidden = true;
});