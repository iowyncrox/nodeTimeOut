var currentTime = 0;

var timeOut = setTimeout(function (stringOne, stringTwo) {
    console.log(stringOne + " " + stringTwo);
    clearInterval(interval);
}, 5000, "Hello", "World");

var interval = setInterval(function () {
    currentTime += 500;
    console.log(currentTime);
}, 500);

interval;
timeOut;