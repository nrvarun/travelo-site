// $("#quizSlider").slick({
//   infinite: false,
//   adaptiveHeight: true,
//   prevArrow: $("#homePhotosSliderPrev"),
//   nextArrow: $("#homePhotosSliderNext"),
// });

// add listeners for the quiz buttons
var quizSubmitButton = document.querySelector("#handleQuizConfirm");
quizSubmitButton.addEventListener("click", checkQuizAnswers);

// var quizResetButton = document.querySelector(".quiz-reset");
// quizResetButton.addEventListener("click", resetQuiz);

function checkQuizAnswers(e) {
  e.preventDefault();

  console.log("Are we here yet!!!");

  // keep track of the current quiz score
  var score = 0;

  // find the submitted answers:
  // question 1 is several radio inputs, so find the selected one
  // it may be that someone clicked submit without selecting a radio button,
  // so we need to see if one has been selected, and if so what its value is
  var question1 = document.querySelector("input[name=question-1]:checked");
  if (question1 && question1.value === "second") {
    score = score + 1;
  }

  // question 2 is a select dropdown element, so find the selected option
  var question2 = document.querySelector("select[name=question-2]").value;
  if (question2 === "one") {
    score = score + 1;
  }

  // question 3 is a text input
  // because this is a text entry field, allow people to use a capital or
  // lower-case, e.g. they can enter "Earth" or "earth"
  // also remove any spaces before or after, so they can enter " earth "
  var question3 = document.querySelector("input[name=question-3]").value;
  if (question3.trim().toLowerCase() === "earth") {
    score = score + 1;
  }

  // hide the quiz results block if it is currently shown
  var quizResultsBlock = document.querySelector(".quiz-result.show");
  if (quizResultsBlock) {
    quizResultsBlock.classList.remove("show");
  }

  // find the relevant quiz results block to display, based on their score
  var quizResultsBlock = document.querySelector(".quiz-result-" + score);
  quizResultsBlock.classList.add("show");
}

function resetQuiz(e) {
  // stop the form submission refreshing the page, which is the default
  // behaviour when someone submits an HTML form
  e.preventDefault();

  // hide the quiz results block if it is currently shown
  var quizResultsBlock = document.querySelector(".quiz-result.show");
  if (quizResultsBlock) {
    quizResultsBlock.classList.remove("show");
  }

  // reset the first question - deselect the radio input if one is selected
  var question1 = document.querySelector("input[name=question-1]:checked");
  if (question1) {
    question1.checked = false;
  }

  // reset the second question - the select input
  var question2 = document.querySelector("select[name=question-2]");
  question2.value = "";

  // reset the third question - the text input
  var question3 = document.querySelector("input[name=question-3]");
  question3.value = "";
}
