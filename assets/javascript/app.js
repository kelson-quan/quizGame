window.onload = function() {
    stopwatch.reset();
    generateQuestionBlock();
    stopwatch.start();
  };

// Chapter 1: Time Counter
//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// prevents the clock from being sped up unnecessarily
var clockRunning = false;
var stopwatch = {

    time: 20,

    reset: function() {
        console.log("hello");
        stopwatch.time = 20;
        clockRunning = false;
        $(".secondDisplay").text(stopwatch.time);

    },
    start: function() {

        // DONE: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true; 
        }
      },
    stop: function() {

        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;
    },
    count: function() {
        stopwatch.time--;
        $(".secondDisplay").text(stopwatch.time);
        console.log(stopwatch.time);
        if (stopwatch.time === 0) {
            clearInterval(intervalId);
            stopwatch.reset();
            alert("Out of time biiiiiiiiiiitch");
        }
    }
    
};

// Chapter 2: Question blocks
var questionBlock = [
    {Q: "What is my name?",
    r: ["Kelson", "Alyssa", "Alli", "Brenda"],
    a: "Kelson"
    },
    {Q: "What is my last name?",
    r: ["Relos", "Quan", "Queso", "Yummy Town"],
    a: "Quan"
    },
    {Q: "What is my middle name?",
    r: ["Bob", "John", "Robert", "Ming"],
    a: "Bob"
    },
];

//Initialize a variable for the question block
var questionCount = 0;
// Create question and option texts
var questionText = questionBlock[questionCount].Q;
var optionAText = questionBlock[questionCount].r[0];
var optionBText = questionBlock[questionCount].r[1];
var optionCText = questionBlock[questionCount].r[2];
var optionDText = questionBlock[questionCount].r[3];
var answerText = questionBlock[questionCount].a;

//Function to Write the question
function generateQuestionBlock() { 
$(".question").html(questionText);
$(".option-a").html(optionAText);
$(".option-b").html(optionBText);
$(".option-c").html(optionCText);
$(".option-d").html(optionDText);
}

//Initiate all that good good when someone clicks on shit
function clickHandler() {
    $("li").on("click",function(){
        var userChoice = $(this).text();
        console.log(userChoice);
        if (userChoice === answerText) {
            alert("correct broseph");
            questionCount++;
            console.log(questionCount);
            stopwatch.reset();
            generateQuestionBlock();
            stopwatch.start();
        } else{
            alert("bro you're a loser");
            questionCount++;
            stopwatch.reset();
            generateQuestionBlock();
            stopwatch.start();
        }
    })
};

clickHandler();

// Chapter 3 Game parameters
