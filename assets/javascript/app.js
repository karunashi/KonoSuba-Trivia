// Global variables set up for counter on how many user gets correct.
var correctAnswers = 0;
var timer;

// When document is ready, the quiz container will be hidden until...
$(document).ready(function() {
    $("#quiz").hide()
});

// User clicks the Start button to show the quiz container, and hide the button with some jQuery animation. Timer starts!
$(".quizStart").on("click", function() {
    $(this).hide(1500)
    $("#quiz").show(3000)
    time()
})

// If time runs out before user can press the submit button, it will stop the timer and automatically submit what they have.
function failed() {
    clearInterval(timerId);
    submitAnswers()
    return;
}

// Timer that starts at 93 seconds, and decrements by 1 second.
function time() {
    timer = 63;
    timerId = setInterval(decrement, 1000);
}

// Function for decrementing by a second, to also explicitly show the content.
function decrement() {
    timer--;
    $(".timer").html("<h3>Time Remaining: " + timer + "</h3>");
    // User runs out of time, it initiates failed() function
    if (timer === 0) {
        failed()
        return;
    }
}

// Submit/End point. If user runs out of time, or if they click submit this initiates
function submitAnswers() {
    // Stops timer.
    clearInterval(timerId)
        // Goes through for loop for every Question in the quiz (6) with an extra count to 7 for good measure.
    for (var i = 1; i < 7; i++) {
        // Loop will select all questions (Question1-Question7)
        var radios = document.getElementsByName('Question' + i);
        for (var j = 0; j < radios.length; j++) {
            var radio = radios[j];
            // If each radio button selection grouped by name has been checked with the correct answer...
            if (radio.value == "correct" && radio.checked) {
                // Add point to correctAnswers variable counter, and keep doing so
                correctAnswers++;
            }
        }
    }
    // Once the quiz is over, it will also clear the well container #quiz.
    $("#quiz").empty();
    // Print the results of how many they got correct out of total questions (inherently showing how many they got wrong)
    $("#quiz").html("<h1>You got " + correctAnswers + " out of 6 correct</h1>")

    // Extra video changes if they get all correct.
    if (correctAnswers == 6) {
        $("#bgblock").attr("src", "https://www.youtube.com/embed/vtsmlbQgdNk?wmode=opaque&VQ=HD720&autoplay=1&loop=1&controls=0&showinfo=0&autohide=1&playlist=vtsmlbQgdNk")
    }
    // Extra video changes if they get anything less than perfect. 
    else {
        $("#bgblock").attr("src", "https://www.youtube.com/embed/LqqI5G9OLpE?wmode=opaque&VQ=HD1080&autoplay=1&loop=1&controls=0&showinfo=0&autohide=1&playlist=LqqI5G9OLpE")
    }

}
