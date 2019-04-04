var questions = [ {
    question: "Which country has a 'Great Wall'?",
    choices: ["America", "Great Britain", "China", "Japan"],
    correctAnswer: 2
}, {
    question: "How many rings are there on the Olympic flag?",
    choices: ["Five", "Two", "None", "Ten"],
    correctAnswer: 0
}, {
    question: "What gas is used to disinfect swimming pools?",
    choices: ["Chlorine", "Oxygen", "Carbon Dioxide", "Methane"],
    correctAnswer: 0
}, {
    question: "What grain is traditionally thrown at weddings?",
    choices: ["Rice", "Pasta", "Bread"],
    correctAnswer: 0
},{
	question: "Which fictional doctor can speak to animals?",
    choices: ["Doctor Who", "Dr. Dolally", "Dr. Christopher Turk", "Dr. Dolittle"],
    correctAnswer: 3
},{
	question: "What night of the year is associated with Guy Fawkes?",
    choices: ["November 5", "December 25", "January 1", "June 8"],
    correctAnswer: 0
},{
	question: "What is the centre of a shooting target called?",
    choices: ["Middle", "Bulls Behind", "Bulls Eye", "Cows Eye"],
    correctAnswer: 2
},{
	question: "What is the name of a picture which shows bones?",
    choices: ["X-Rag", "X-Ray", "X-Files", "X-Code"],
    correctAnswer: 1
},{
	question: "Mount Blanc is the highest mountain in which mountain range?",
    choices: ["Alps", "Himalayas", "Rockies", "Amazon"],
    correctAnswer: 0
},{
    question: "Which Dikens novel has the character 'Scrooge'?",
    choices: ["Macbeth", "A Christmas Carol", "A Tale of Two Cities"],
    correctAnswer: 1

}];

var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
	var c=180;
	var t;

var container = document.getElementById('imageContainer')
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
    // On clicking next, display the next question
      $(this).find(".nextButton").on("click", function ()
  	{
          if (!quizOver)
  		{

              var val = $("input[type='radio']:checked").val();

              if (val == undefined)
  			{
                  $(document).find(".quizMessage").text("Please select an answer");
                  $(document).find(".quizMessage").show();
              }
  			else
  			{

                  $(document).find(".quizMessage").hide();
  				if (val == questions[currentQuestion].correctAnswer)
  				{
  					correctAnswers++;
  				}
  				iSelectedAnswer[currentQuestion] = val;

  				currentQuestion++; // Since we have already displayed the first question on DOM ready
  				if(currentQuestion >= 1) {
  					  $('.preButton').prop("disabled", false);
  				}
  				if (currentQuestion < questions.length)
  				{
  					displayCurrentQuestion();

  				}
  				else
  				{
  					displayScore();
  					$('#iTimeShow').html('Quiz Time Completed!');
  					$('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
  					c=185;
  					$(document).find(".preButton").text("View Answer");
  					$(document).find(".nextButton").text("Play Again?");
  					quizOver = true;
  					return false;

  				}
  			}

  		}
  		else
  		{ // quiz is over and clicked the next button (which now displays 'Play Again?'
  			quizOver = false; $('#iTimeShow').html('Time Remaining:'); iSelectedAnswer = [];
  			$(document).find(".nextButton").text("Next Question");
  			$(document).find(".preButton").text("Previous Question");
  			 $(".preButton").attr('disabled', 'disabled');
  			resetQuiz();
  			viewingAns = 1;
  			displayCurrentQuestion();
  			hideScore();
  		}
      });
  });



  function timedCount()
  	{
  		if(c == 185)
  		{
  			return false;
  		}

  		var hours = parseInt( c / 3600 ) % 24;
  		var minutes = parseInt( c / 60 ) % 60;
  		var seconds = c % 60;
  		var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);
  		$('#timer').html(result);

  		if(c == 0 )
  		{
  					displayScore();
  					$('#iTimeShow').html('Quiz Time Completed!');
  					$('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
  					c=185;
  					$(document).find(".preButton").text("View Answer");
  					$(document).find(".nextButton").text("Play Again?");
  					quizOver = true;
  					return false;

  		}


  		c = c - 1;
  		t = setTimeout(function()
  		{
  			timedCount()
  		},1000);
  	}


  // This displays the current question AND the choices
  function displayCurrentQuestion()
  {

  	if(c == 185) { c = 180; timedCount(); }
      //console.log("In display current Question");
      var question = questions[currentQuestion].question;
      var questionClass = $(document).find(".quizContainer > .question");
      var choiceList = $(document).find(".quizContainer > .choiceList");
      var numChoices = questions[currentQuestion].choices.length;
      // Set the questionClass text to the current question
      $(questionClass).text(question);
      // Remove all current <li> elements (if any)
      $(choiceList).find("li").remove();
      var choice;


      for (i = 0; i < numChoices; i++)
  	{
          choice = questions[currentQuestion].choices[i];

  		if(iSelectedAnswer[currentQuestion] == i) {
  			$('<li><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
  		} else {
  			$('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
  		}
      }
  }

  function resetQuiz()
  {
      currentQuestion = 0;
      correctAnswers = 0;
      hideScore();
  }

  function displayScore()
  {
      $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
      $(document).find(".quizContainer > .result").show();
  }

  function hideScore()
  {
      $(document).find(".result").hide();
  }

  // This displays the current question AND the choices
  function viewResults()
  {

  	if(currentQuestion == 10) { currentQuestion = 0;return false; }
  	if(viewingAns == 1) { return false; }

  	hideScore();
      var question = questions[currentQuestion].question;
      var questionClass = $(document).find(".quizContainer > .question");
      var choiceList = $(document).find(".quizContainer > .choiceList");
      var numChoices = questions[currentQuestion].choices.length;
      // Set the questionClass text to the current question
      $(questionClass).text(question);
      // Remove all current <li> elements (if any)
      $(choiceList).find("li").remove();
      var choice;


  	for (i = 0; i < numChoices; i++)
  	{
          choice = questions[currentQuestion].choices[i];

  		if(iSelectedAnswer[currentQuestion] == i) {
  			if(questions[currentQuestion].correctAnswer == i) {
  				$('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
  			} else {
  				$('<li style="border:2px solid red;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
  			}
  		} else {
  			if(questions[currentQuestion].correctAnswer == i) {
  				$('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
  			} else {
  				$('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' +  ' ' + choice  + '</li>').appendTo(choiceList);
  			}
  		}
      }

  	currentQuestion++;

  	setTimeout(function()
  		{
  			viewResults();
  		},30000000000000000000000);
  }
