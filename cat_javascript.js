var duration;
var start;
var colorChange;
var dance;
var i = 0;
var images = ["dancing_cat_images/LongCat_Left.png", "dancing_cat_images/LongCat_Right.png"];
var display = document.getElementById('catImage');

//example 2 - Event Listener
document.querySelector('#danceBtn').addEventListener('click', function () {
    duration = document.getElementById('timeLoop').value;

    //validation check (checks whether there is input/when input is zero)
    if (!duration || duration == 0) {
        errorMessage();
    } else {
        document.querySelector('#error').style.display = "none";
        const errorMsg = document.querySelectorAll('.msg');
        for (let i = 0; i < errorMsg.length; i++) {
            errorMsg[i].style.color = "black";
        }

        document.getElementById('countdown').innerHTML = duration;
        start = setInterval(countdown, 1000);

        colorChange = setInterval(changeColor, 500);

        imageChange(); // method called to avoid delay 
        dance = setInterval(imageChange, 500);
    }

});

function countdown() {
    let count = document.getElementById('countdown');

    if (!duration) {
        stopTimer();

    } else if (duration == 0) {
        stopTimer();
        count.innerHTML = "...";
    } else {
        duration--;
        count.innerHTML = duration;
        if (duration == 0) {
            stopTimer();
            count.innerHTML = "...";
        }
    }
}

//example 3 - Node List + Looping
//if data doesn't fit validation check, then call function
function errorMessage() {

    const errorMsg = document.querySelectorAll('.msg');
    for (let i = 0; i < errorMsg.length; i++) {
        errorMsg[i].style.color = "red";
    }
    document.getElementById('countdown').innerHTML = "...";

    //example 1 - access by id 
    document.querySelector('#error').style.display = "block";
}

function getRandomColor() {
    var letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor() {
    document.querySelector('body').style.backgroundColor = getRandomColor();
}

function imageChange() {
    display.src = images[i];
    i = (i + 1) % images.length; //returns either 0,1
}

function stopTimer() {
    clearInterval(start);
    clearInterval(dance);
    clearInterval(colorChange);
}