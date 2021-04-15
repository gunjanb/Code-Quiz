var starQuizButtonEl = document.querySelector("#start-quiz");
var userInfoSectionEl = document.querySelector(".user-info");
var startContentEl = document.querySelector(".quiz-start-content");
var timerEl = document.querySelector("#timer");
var questionAnswerDisplayEl = document.querySelector(
  ".question-answer-display"
);
userInfoSectionEl.setAttribute("style", "display: none");
var questionNumber = 0;
var timeInterval;
var timeLeft = 120;

//questions in array of object
var questionCollection = [
  {
    question: "JavaScript is a ___ -side programming language.",
    options: ["Client", "Server", "Both", "None"],
    answer: "Both",
  },
  {
    question:
      "What is the HTML tag under which one can write the JavaScript code?",
    options: ["<javascript>", "<scripted>er", "<script>", "<js>"],
    answer: "<script>",
  },
  {
    question:
      "Which of the following is the correct syntax to display “Hello World” in an alert box using JavaScript?.",
    options: [
      "alertbox(“Hello World”);",
      "msg(“Hello World”);",
      "msg(“Hello World”);",
      "alert(“Hello World”);",
    ],
    answer: "aalert(“Hello World”);",
  },
  {
    question:
      "What is the syntax for creating a function in JavaScript named as maxfunc? ",
    options: [
      "function = maxfunc() ",
      "function maxfunc()",
      "function := maxfunc()",
      "function : maxfunc()",
    ],
    answer: "function maxfunc()",
  },
  {
    question: "Which of the following is not a reserved word in JavaScript?",
    options: ["interface", "throws", "program", "short"],
    answer: "program",
  },
  {
    question:
      "How to write an ‘if’ statement for executing some code.If “i” is NOT equal to 5?.",
    options: ["if(i<>5)", "if i<>5", "if(i!=5)", "if i!=5"],
    answer: "if(i!=5)",
  },
  {
    question:
      "What is the method in JavaScript used to remove the whitespace at the beginning and end of any string ?.",
    options: ["strip()", "trim()", "stripped()", "trimmed()"],
    answer: "trim()",
  },
  {
    question: "Which of the following is an advantage of using JavaScript?",
    options: [
      "Increased interactivity.",
      "Less server interaction.",
      "Immediate feedback from the users.",
      "All of the above.",
    ],
    answer: "All of the above",
  },
  {
    question:
      "Which function of an Array object calls a function for each element in the array?",
    options: ["forEach()", "every()", "forEvery()", "each()"],
    answer: "forEach()",
  },
  {
    question: "How does a FOR loop start?",
    options: [
      "for(i<=5;i++)",
      "for i=1 to 5",
      "for(i=0;i<=5; i++)",
      "for(i=0; i<=5)",
    ],
    answer: "for(i=0; i<5; i++)",
  },
];

//to set a timer for every 1sec so this function will be excuted every 1sec
function startTimer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timerEl.textContent = ":" + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

function checkUserInput() {
  // create a horizontal line
  var horizontalLineEl = document.createElement("hr");
  //option button textcontext
  if (this.textContent === questionCollection[questionNumber].answer) {
    // console.log("answer right");
    questionAnswerDisplayEl.lastChild.appendChild(horizontalLineEl);
    horizontalLineEl.setAttribute(
      "style",
      "height: 50px;  background: url(../images/horizontalline.png) no-repeat center;    border: none;"
    );
  }
}

function displayQuestionAnswer() {
  //if user has just started the quiz  then : Remove the start-content and start timer
  if (questionNumber === 0) {
    startContentEl.remove();
    startTimer();
  }

  // start to display question
  if (questionNumber < questionCollection.length) {
    //add question
    var questionEl = document.createElement("p");
    questionEl.textContent = questionCollection[questionNumber].question;
    // Create ordered list element
    var listEl = document.createElement("ul");
    // Create ordered list items
    var li1 = document.createElement("li");
    var li2 = document.createElement("li");
    var li3 = document.createElement("li");
    var li4 = document.createElement("li");

    //create button
    btnOption1El = document.createElement("button");
    btnOption2El = document.createElement("button");
    btnOption3El = document.createElement("button");
    btnOption4El = document.createElement("button");

    //adding que options to button
    btnOption1El.textContent = questionCollection[questionNumber].options[0];
    btnOption2El.textContent = questionCollection[questionNumber].options[1];
    btnOption3El.textContent = questionCollection[questionNumber].options[2];
    btnOption4El.textContent = questionCollection[questionNumber].options[3];

    // li1.textContent = questionCollection[questionNumber].options[0];
    // li2.textContent = questionCollection[questionNumber].options[1];
    // li3.textContent = questionCollection[questionNumber].options[2];
    // li4.textContent = questionCollection[questionNumber].options[3];

    //adding btn to a link
    li1.appendChild(btnOption1El);
    li2.appendChild(btnOption2El);
    li3.appendChild(btnOption3El);
    li4.appendChild(btnOption4El);

    //adding link to unordered list
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);

    //appending que and ans to section
    questionAnswerDisplayEl.appendChild(questionEl);
    questionAnswerDisplayEl.appendChild(listEl);

    questionAnswerDisplayEl.setAttribute("style", "margin-top:5rem");
    questionEl.setAttribute(
      "style",
      "font-weight:bold; font-size:1.5rem;  font-family:Arial, Helvetica, sans-serif;"
    );

    btnOption1El.addEventListener("click", checkUserInput);
    btnOption2El.addEventListener("click", checkUserInput);
    btnOption3El.addEventListener("click", checkUserInput);
    btnOption4El.addEventListener("click", checkUserInput);

    //questionNumber++;
  }
}

starQuizButtonEl.addEventListener("click", function () {
  displayQuestionAnswer();
});
