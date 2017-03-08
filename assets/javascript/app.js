var correctAnswers = 0;
var timer;

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
    submitAnswers()
    return;
}

function time() {
    timer = 63;
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
function submitAnswers()
      {                   
        clearInterval(timerId)
for(var i = 1; i <= 45; i++) {
  var radios = document.getElementsByName('Question'+i);
  for(var j = 0; j < radios.length; j++) {
    var radio = radios[j];
    if(radio.value == "correct" && radio.checked) {
      correctAnswers++;
    }
  }
}                   
        $("#quiz").empty();
        $("#quiz").html("<h1>You got " + correctAnswers + " out of 6 correct</h1>")
      }