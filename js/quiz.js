var questions = [{
    question: "1. Which Dikens novel has the character 'scrooge'?",
    choices: ["Macbeth", "A Christmas Carol", "A Tale of 2 Cities"],
    correctAnswer: 1
}, {
    question: "2. Which country has a Great Wall",
    choices: ["America", "Great Britain", "China", "Japan"],
    correctAnswer: 2
}, {
    question: "3. How many rings are there on the Olympic flag?",
    choices: ["Five", "Two", "None", "Ten"],
    correctAnswer: 0
}, {
    question: "4. What gas is used to disinfect swimming pools?",
    choices: ["Chlorine", "Oxygen", "Carbon Dioxide", "Methane"],
    correctAnswer: 0
}, {
    question: "5. What grain is traditionally thrown at weddings?",
    choices: ["Rice", "Pasta", "Bread"],
    correctAnswer: 0
},{
	question: "6. Which ficitional doctor can speak to animals?",
    choices: ["Doctor Who", "Dr. Dolally", "Dr. Christopher Turk", "Dr. Doolittle"],
    correctAnswer: 3
},{
	question: "7. What night of the year is associated with Guy Fawkes?",
    choices: ["November 5", "December 25", "January 1", "June 8"],
    correctAnswer: 0
},{
	question: "8. What is the centre of a shooting target called?",
    choices: ["middle", "bulls behind", "bulls eye", "cows eye"],
    correctAnswer: 2
},{
	question: "9. What is the name of a picture which shows bones?",
    choices: ["X-rag", "X-ray", "X-Files", "X-Code"],
    correctAnswer: 1
},{
	question: "10. Mount Blanc is the highest mountain in which mountain range?",
    choices: ["Alps", "Himalayas", "Rockies", "Amazon"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
	var c=180;
	var t;
$(document).ready(function ()
{
    // Display the first question
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".preButton").attr('disabled', 'disabled');

	timedCount();

	$(this).find(".preButton").on("click", function ()
	{

        if (!quizOver)
		{
			if(currentQuestion == 0) { return false; }

			if(currentQuestion == 1) {
			  $(".preButton").attr('disabled', 'disabled');
			}

				currentQuestion--; // Since we have already displayed the first question on DOM ready
				if (currentQuestion < questions.length)
				{
					displayCurrentQuestion();

				}
		} else {
			if(viewingAns == 3) { return false; }
			currentQuestion = 0; viewingAns = 3;
			viewResults();
		}
    });
