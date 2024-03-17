var btn = document.querySelector("button");
var time = document.querySelector("h3");
var intervalId; // variable to store the interval ID

btn.addEventListener("click", function() {
    var count = 0;
    if (intervalId) {
        clearInterval(intervalId); // clear previous interval
    }
    intervalId = setInterval(function() {
        time.textContent = count;
        count++;
    }, 1000);
});
