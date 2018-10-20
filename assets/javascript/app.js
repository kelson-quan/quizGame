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
        stopwatch.time = 20;
        clockRunning = false;
        clearInterval(intervalId);
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

// Recalculate the variables
function recalculateVariables () {
    questionText = questionBlock[questionCount].Q;
    optionAText = questionBlock[questionCount].r[0];
    optionBText = questionBlock[questionCount].r[1];
    optionCText = questionBlock[questionCount].r[2];
    optionDText = questionBlock[questionCount].r[3];
    answerText = questionBlock[questionCount].a;
}

//Function to Write the question
function generateQuestionBlock() { 
    $("li").empty();
    $(".question").text(questionText);
    $(".option-a").text(optionAText);
    $(".option-b").text(optionBText);
    $(".option-c").text(optionCText);
    $(".option-d").text(optionDText);
    console.log(questionCount);
    console.log(optionAText);
}


//Initiate all that good good when someone clicks on shit
function clickHandler() {
    $("li").on("click",function(){
        var userChoice = $(this).text();
        if (userChoice === answerText) {
            alert("correct broseph");
            questionCount++;
            recalculateVariables();
            stopwatch.reset();
            generateQuestionBlock();
            stopwatch.start();
        } else{
            alert("bro you're a loser");
            questionCount++;
            recalculateVariables();
            stopwatch.reset();
            generateQuestionBlock();
            stopwatch.start();
        }
    })
};

clickHandler();

// Chapter 3 Game parameters
