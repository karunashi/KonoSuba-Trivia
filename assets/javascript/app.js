var questions = [{
    question: "Test?",
    choices: ["Abc", "aBc", "abC", "ABC"],
    correctAnswer: 1
}, {
    question: "Test?12313123",
    choices: ["aa", "abb", "acc", "Add"],
    correctAnswer: 2
}, {
    question: "NAH",
    choices: ["Abc", "aBc", "abC", "ABC"],
    correctAnswer: 2
}];

var currentQues = 0; // Counter for which question user is on.
var correctAnswers = 0; // Counter for correct guesses
var gameOver = false; // Check for if game is over or not. ex: False = Game isn't over.
var timer = 33;
var timerId;

$(document).ready(function() {
    $("#quiz").hide()
});

$(".quizStart").on("click", function() {
    $(this).hide(1500)
    $("#quiz").show(3000)
    time()
})

function failed() {
    clearInterval(timerId);
    var status = $("<img>")
    $(".question").html("Ran out of time!");
    $(".choices").html("");
    status.attr("src", "assets/images/timeout.gif")
    $(".stat").append(status);
    currentQues++;
    return;
}

function time() {
    timer = 33;
    timerId = setInterval(decrement, 1000);
}

function decrement() {
    timer--;
    $(".timer").html("<h3>Time Remaining: " + timer + "</h3>");
    if (timer === 0) {
        failed()
        return;
    }
}