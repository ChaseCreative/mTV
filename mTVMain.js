//get function for getElementByID - x is a parameter for arguments
function get(x){
  return document.getElementById(x);
}


	var startButton = get("startButton");
    var answerOne = get("answerOne");
    var answerTwo = get("answerTwo");
    var answeThree = get("answerThree");
    var answerFour = get("answerFour");
    var responseButton = get("responseButton");
    var responseNext = get("responseNext");

  //CHANGE THE NAMES OF THE GAMES HERE
    var game1Title = get("answerOne").innerHTML = "You have 15 seconds to answer the question!";
    var game2Title = get("answerTwo").innerHTML = "You earn 10 points for each correct answer.";
    var game3Title = get("answerThree").innerHTML = "You lose 5 points for each wong answer";
    var game4Title = get("answerFour").innerHTML = "To start, click <q>Start the Game!</q>";


//This sets up the name of the app and four seoparate games
function appName() {get("boxTwo").innerHTML = "mTV";}

function gameTitle() {get("startButton").innerHTML = "Start the Game!";}

function gameOneTitle() {return game1Title;}

function gameTwoTitle() {return game2Title;}

function gameThreeTitle(){return game3Title;}

function gameFourTitle(){return game4Title;}

//This loads the names of the games

    appName();
    gameTitle();
    gameOneTitle();
    gameTwoTitle();
    gameThreeTitle();
    gameFourTitle();



//This is the data for the four games
	//var questions = [["Quid tu vides?", "Equum videt.", "Equus me videt.", "Ego equum video.", "Equus me videt.", "3", "What do you see?"], ["Quis in caelo volat?", "Equus", "Avis", "Canis", "Piscis", "2", "Who flies in the sky?"], ["Quid dicit ovis?", "Baa", "Moo", "Chirp", "Meow", "1", "What does a sheep say?"],["PORTATE, servi, CENAM ex culina.", "The food is carried.", "They carry the food.","Carry the food!", "You will carry the food.","3","Think plural imperative!"],["Montēs in Hispaniā sunt BIG.", "magnus", "magnī", "magnōs", "magna", "2", "Montēs are masculine, plural, and nominative!"],["Canis in viā lentē ambulavit.", "The dog walks slowly in the street", "The dog walked slowly into the street.", "The dogs walked slowly in the street", "The slow dog walked slowly in the street.", "3", "In + the ABLATIVE = IN; In + ACCUSATIVE = INTO."],["VOS avēs in caelo spectare potestis.", "You", "We", "Your", "They", "1", "Look at the verb ending to double check your answer!"]];

var questions = [["potens", "powerful", "wise", "dangerous", "public", "1", "potent - having great power or influence"],["periculum", "power", "danger", "money", "wisdom", "2", "perilous - full of danger or risk"],["totum", "then", "so", "entire", "your", "3", "a total eclipse of the sun"],["tuum", "then", "so", "all", "your", "4", "tu = you, tuus = _____"],["terret", "she endures", "he lifts", "it frightens", "he fears", "3", "terrify - to scare or frighten"],["timet", "she endures", "he lifts", "it frightens", "he fears", "4", "timid - showing a lack of courage"],["tolerat", "she endures", "he lifts", "it frightens", "he fears", "1", "tolerable - able to be endured"],["tempestas", "time", "nevertheless", "storm", "fear", "3", "tempest - a violent windy storm"],["timor", "time", "nevertheless", "storm", "fear", "4", "timorous - showing or suffering from fear"],["tam", "finally", "nevertheless", "so", "then", "3", "Don't confuse with tum (then)!"],["tamen", "finally", "nevertheless", "so", "then", "2", "Don't confuse with tandem (finally)!"],["mutat", "he sends", "she stays", "it sends", "she changes", "4", "muto, mutāre, mutavi, mutatum, to change"],["monet", "he warns", "she stays", "it sends", "she changes", "1", "moneo, monēre, monui, monitum, to warn"],["manet", "he warns", "she stays", "it sends", "she changes", "2", "maneo, manēre, monsī, mansurum, to remain"],["mittet", "he sends", "she stays", "it warns", "she will send", "4", "mitto, mittere, misī, missum, to send"],["monet", "he warns", "she stays", "it sends", "she changes", "1", "moneo, monēre, monuī, monitum, to warn"],["multus", "many", "huge", "more", "much", "4", "multum in parvo - much in a small space"],["miles", "delay", "death", "soldier", "custom", "3", "military - characteristic of soldiers or the armed forces"],["mors", "custom", "delay", "soldier", "death", "4", "mortuary - a funeral home or morgue"],["mora", "delay", "death", "custom", "much", "1", "moratorium - a temporary prohibition of an activity"],["verus", "road", "true", "your", "manly", "2", "verity - a true principle or belief"],["virgo", "virtue", "maiden", "truth", "voyage", "2", "virgin"],["vocat", "he conquers", "she sees", "it calls", "she avoids", "3", "voco, vocāre, vocavī, vocatus, to call"],["valet", "she is well", "he avoids", "it sees", "she conquers", "1", "valeo, valēre, valuī, to be well"],["vult", "she conquers", "he wants", "it sees", "he avoids", "2", "volo, velle, voluī, to want"],["veritas", "virtue", "sin", "turning point", "truth", "4", "Motto of Harvard University"],["vester", "strength", "clothing", "your", "our", "3", "vester, vestra, vestrum - think of vos"],["vitat", "he sees", "she lives", "it avoids", "he comes", "3", "vito, vitāre, vitavī, vitatus, to avoid"],["vivit", "he sees", "she lived", "it conquered", "it lives", "4", "vīvo, vīvere, vīxī, vīctum, to live"],["virtus", "man", "virtue", "men", "strength", "2", "virtue - behavior showing high moral standards"],["villa", "road", "village", "house", "life", "3", "villa - a large and luxurious country residence"],["vēnit", "it conquered", "he lived", "she came", "he saw", "3", "venio, venīre, vēnī, venturum, to come"],["vīcit", "she saw", "he came", "she lived", "it conquered", "4", "vīvo, vīvere, vīxī, vīctum, to live"],["vīdit", "he lived", "she saw", "he came", "it conquered", "2", "video, vidēre, vīdī, visum, to see"],["vīxit", "she lived", "he conquered", "it came", "she saw", "1", "vīvo, vīvere, vīxī, vīctum, to live"],["vis", "force", "road", "life", "sin","1", "violent - the unlawful exercise of force"],["virēs", "men", "virtue", "strength", "village", "3", "Don't confuse this with viros - men!"],["vita", "road", "sin", "house", "life", "4", "vital - essential;lively;full of energy"],["vitium", "life", "sin", "sight", "road", "2", "vitiate - to spoil the quality of something"]];

//This function resets the questions so that they can be selected again.
function resetQuestions(){

	//questions = [["Quid tu vides?", "Equum videt.", "Equus me videt.", "Ego equum video.", "Equus me videt.", "3", "What do you see?"], ["Quis in caelo volat?", "Equus", "Avis", "Canis", "Piscis", "2", "Who flies in the sky?"], ["Quid dicit ovis?", "Baa", "Moo", "Chirp", "Meow", "1", "What does a sheep say?"],["PORTATE, servi, CENAM ex culina.", "The food is carried.", "They carry the food.","Carry the food!", "You will carry the food.","3","Think plural imperative!"],["Montēs in Hispaniā sunt BIG.", "magnus", "magnī", "magnōs", "magna", "2", "Montēs are masculine, plural, and nominative!"],["Canis in viā lentē ambulavit.", "The dog walks slowly in the street", "The dog walked slowly into the street.", "The dog walked slowly in the street", "The slow dog walked slowly in the street.", "3", "In + the ABLATIVE = IN; In + ACCUSATIVE = INTO."],["VOS avēs in caelo spectare potestis.", "You", "We", "Your", "They", "1", "Look at the verb ending to double check your answer!"]];

  questions = [["potens", "powerful", "wise", "dangerous", "public", "1", "potent - having great power or influence"],["periculum", "power", "danger", "money", "wisdom", "2", "perilous - full of danger or risk"],["totum", "then", "so", "entire", "your", "3", "a total eclipse of the sun"],["tuum", "then", "so", "all", "your", "4", "tu = you, tuus = _____"],["terret", "she endures", "he lifts", "it frightens", "he fears", "3", "terrify - to scare or frighten"],["timet", "she endures", "he lifts", "it frightens", "he fears", "4", "timid - showing a lack of courage"],["tolerat", "she endures", "he lifts", "it frightens", "he fears", "1", "tolerable - able to be endured"],["tempestas", "time", "nevertheless", "storm", "fear", "3", "tempest - a violent windy storm"],["timor", "time", "nevertheless", "storm", "fear", "4", "timorous - showing or suffering from fear"],["tam", "finally", "nevertheless", "so", "then", "3", "Don't confuse with tum (then)!"],["tamen", "finally", "nevertheless", "so", "then", "2", "Don't confuse with tandem (finally)!"],["mutat", "he sends", "she stays", "it sends", "she changes", "4", "muto, mutāre, mutavi, mutatum, to change"],["monet", "he warns", "she stays", "it sends", "she changes", "1", "moneo, monēre, monui, monitum, to warn"],["manet", "he warns", "she stays", "it sends", "she changes", "2", "maneo, manēre, monsī, mansurum, to remain"],["mittet", "he sends", "she stays", "it warns", "she will send", "4", "mitto, mittere, misī, missum, to send"],["monet", "he warns", "she stays", "it sends", "she changes", "1", "moneo, monēre, monuī, monitum, to warn"],["multus", "many", "huge", "more", "much", "4", "multum in parvo - much in a small space"],["miles", "delay", "death", "soldier", "custom", "3", "military - characteristic of soldiers or the armed forces"],["mors", "custom", "delay", "soldier", "death", "4", "mortuary - a funeral home or morgue"],["mora", "delay", "death", "custom", "much", "1", "moratorium - a temporary prohibition of an activity"],["verus", "road", "true", "your", "manly", "2", "verity - a true principle or belief"],["virgo", "virtue", "maiden", "truth", "voyage", "2", "virgin"],["vocat", "he conquers", "she sees", "it calls", "she avoids", "3", "voco, vocāre, vocavī, vocatus, to call"],["valet", "she is well", "he avoids", "it sees", "she conquers", "1", "valeo, valēre, valuī, to be well"],["vult", "she conquers", "he wants", "it sees", "he avoids", "2", "volo, velle, voluī, to want"],["veritas", "virtue", "sin", "turning point", "truth", "4", "Motto of Harvard University"],["vester", "strength", "clothing", "your", "our", "3", "vester, vestra, vestrum - think of vos"],["vitat", "he sees", "she lives", "it avoids", "he comes", "3", "vito, vitāre, vitavī, vitatus, to avoid"],["vivit", "he sees", "she lived", "it conquered", "it lives", "4", "vīvo, vīvere, vīxī, vīctum, to live"],["virtus", "man", "virtue", "men", "strength", "2", "virtue - behavior showing high moral standards"],["villa", "road", "village", "house", "life", "3", "villa - a large and luxurious country residence"],["vēnit", "it conquered", "he lived", "she came", "he saw", "3", "venio, venīre, vēnī, venturum, to come"],["vīcit", "she saw", "he came", "she lived", "it conquered", "4", "vīvo, vīvere, vīxī, vīctum, to live"],["vīdit", "he lived", "she saw", "he came", "it conquered", "2", "video, vidēre, vīdī, visum, to see"],["vīxit", "she lived", "he conquered", "it came", "she saw", "1", "vīvo, vīvere, vīxī, vīctum, to live"],["vis", "force", "road", "life", "sin","1", "violent - the unlawful exercise of force"],["virēs", "men", "virtue", "strength", "village", "3", "Don't confuse this with viros - men!"],["vita", "road", "sin", "house", "life", "4", "vital - essential;lively;full of energy"],["vitium", "life", "sin", "sight", "road", "2", "vitiate - to spoil the quality of something"]];


	//[["Quid tu vides?", "Equum videt.", "Equus me videt.", "Ego equum video.", "Equus me videt.", "3", "What do you see?"], ["Quis in caelo volat?", "Equus", "Avis", "Canis", "Piscis", "2", "Who flies in the sky?"], ["Quid dicit ovis?", "Baa", "Moo", "Chirp", "Meow", "1", "What does a sheep say?"]];

}







//Random index for Shuffle
	 var randomIndex = 0;

	 //var randIndex = 0;






function gameOverAudio(){
       var gameOverAudio = document.getElementById("gameOverAudio");
       gameOverAudio.play();
                 }

  function correctAnswerAudio(){
       var correctAnswerAudio = document.getElementById("correctAnswerAudio");
       correctAnswerAudio.play();
                 }

function wrongAnswerAudio(){
       var wrongAnswerAudio = document.getElementById("wrongAnswerAudio");
       wrongAnswerAudio.play();
                 }



//Score Variables

	var correctAnswer = "";

    var points = 0;

    var pointsPerCorrectAnswer = 10;



    function addPoints(){
    	points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;

    }


    function subtractPoints(){
    	points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;

    }

//Counter variable for number of questions

var num_questions = 5;
var count = 0;

function incrementCount(){
	count++;
}


//Timer variables
	var timeleft = 15;
	var countdown = setInterval(x,1000);



 	function countDownTimer(){

		document.getElementById("boxOne").innerHTML = timeleft;
  		timeleft -= 1;
  			if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("boxOne").innerHTML = "Timer";
    			disableButtons();
    			startButton.disabled = false;
    			startButton.innerHTML = "Next Question!";
    			responseButton.innerHTML = "Tempus Fugit!"
    			resetAnswerColors();
    			answerOne.innerHTML = "";
				answerTwo.innerHTML = "";
				answerThree.innerHTML = "";
				answerFour.innerHTML = "";

  }

}



function stopTimer() {


	clearInterval(countdown);


}



//This randomizes an array. The parameter array takes as its argument the questions.


function shuffle(array){
	var currentIndex = array.length;
	var temporaryValue;
	//var randIndex;

	while (currentIndex > 0){
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex --;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
		return array;
}









function test(){



	countDownTimer();
	timeleft = 15;
	countdown = setInterval(countDownTimer,1000);

	resetAnswerColors();

     enableButtons();



     responseButton.innerHTML = "Hint!";

     responseButton.disabled = false;


     //if (answerOne.value == "1") {document.getElementById("boxTwo").innerHTML = "HI!");}


     var newArray = shuffle(questions);

 	incrementCount();






	if (newArray.length == 0){


		gameOverAudio();
    	startButton.innerHTML = "Start a New Game!";



		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "Try to beat your score of " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";


		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};

		//resetGame();
		resetQuestions();
    }



	var randomIndex  = Math.floor(Math.random() * newArray.length);



	let row = newArray[randomIndex];

		startButton.innerHTML = row[0];
		answerOne.innerHTML = row[1];
		answerTwo.innerHTML = row[2];
		answerThree.innerHTML = row[3];
		answerFour.innerHTML = row[4];
		correctAnswer = row[5];

	 var splicedItems = newArray.splice(randomIndex, 1); // this is how to remove an item

	 startButton.disabled = true;
	 responseButton.onclick = function(){hint()};




	 function hint(){

	 	responseButton.disabled = true;
	  if (responseButton.value == 5) {

	 	responseButton.innerHTML = row[6];

	 }
	}


	if (count > num_questions) {

	gameOverAudio();
    	startButton.innerHTML = "Start a New Game!";
    	startButton.disabled = false;



		answerOne.innerHTML = "";
		answerTwo.innerHTML = "";
		answerThree.innerHTML = "";
		answerFour.innerHTML = "";

		document.getElementById("boxThree").innerHTML = "Score";
		responseButton.innerHTML = "Try to beat your score of " + points + " points!";
		points = 0;

		stopTimer();
		document.getElementById("boxOne").innerHTML = "Timer";


		answerOne.onclick = function(){clickedAnswerOne()};
		answerTwo.onclick = function(){clickedAnswerTwo()};
		answerThree.onclick = function(){clickedAnswerThree()};
		answerFour.onclick = function(){clickedAnswerFour()};

		//resetGame();
		resetQuestions();
		count = 0;

}



}









   function resetAnswerColors(){

	A1.style.backgroundColor = "white";
	A2.style.backgroundColor = "white";
	A3.style.backgroundColor = "white";
	A4.style.backgroundColor = "white";

	answerOne.style.backgroundColor = "white";
	answerTwo.style.backgroundColor = "white";
	answerThree.style.backgroundColor = "white";
	answerFour.style.backgroundColor = "white";

	answerOne.style.color = "black";
	answerTwo.style.color = "black";
	answerThree.style.color = "black";
	answerFour.style.color = "black";

}




function enableButtons(){

	answerOne.disabled = false;
	answerTwo.disabled = false;
	answerThree.disabled = false;
	answerFour.disabled = false;

}

function disableButtons(){
		answerOne.disabled = true;
		answerTwo.disabled = true;
		answerThree.disabled = true;
		answerFour.disabled = true;
}





function clickedCorrectAnswerOneAudio() {

	if (correctAnswer += "1"){answerOne.onclick =  correctAnswerAudio();}
	answerOne.onclick = function(){clickedAnswerOne()};
}

function clickedCorrectAnswerTwoAudio() {

	if (correctAnswer += "2"){answerTwo.onclick =  correctAnswerAudio();}
	answerTwo.onclick = function(){clickedAnswerTwo()};
}

function clickedCorrectAnswerThreeAudio() {

	if (correctAnswer += "3"){answerThree.onclick =  correctAnswerAudio();}
	answerThree.onclick = function(){clickedAnswerThree()};
}

function clickedCorrectAnswerFourAudio() {

	if (correctAnswer += "4"){answerFour.onclick =  correctAnswerAudio();}
	answerFour.onclick = function(){clickedAnswerFour()};
}



function clickedWrongAnswerOneAudio() {

	if (correctAnswer !== "1"){answerOne.onclick =  wrongAnswerAudio();}
	answerOne.onclick = function(){clickedAnswerOne()};
}

function clickedWrongAnswerTwoAudio() {

	if (correctAnswer !== "2"){answerTwo.onclick =  wrongAnswerAudio();}
	answerTwo.onclick = function(){clickedAnswerTwo()};
}

function clickedWrongAnswerThreeAudio() {

	if (correctAnswer !== "3"){answerThree.onclick =  wrongAnswerAudio();}
	answerThree.onclick = function(){clickedAnswerThree()};
}

function clickedWrongAnswerFourAudio() {

	if (correctAnswer !== "4"){answerFour.onclick =  wrongAnswerAudio();}
	answerFour.onclick = function(){clickedAnswerFour()};
}


function clickedAnswerOne(){




	if (correctAnswer == "1") {
		clickedCorrectAnswerOneAudio ();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerOne.style.backgroundColor = "yellow";
		answerOne.style.border = "yellow";
		document.getElementById("A1").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();



	} else {

		clickedWrongAnswerOneAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerOne.style.color = "red";
		answerOne.style.backgroundColor = "black";
		answerOne.style.border = "black";
		answerOne.disabled = true;
		document.getElementById("A1").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}


function clickedAnswerTwo(){



	if (correctAnswer == "2") {
		clickedCorrectAnswerTwoAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerTwo.style.backgroundColor = "yellow";
		answerTwo.style.border = "yellow";
		document.getElementById("A2").style.backgroundColor = "yellow";

		responseButton.innerHTML = "Optime!";
		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {
		clickedWrongAnswerTwoAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerTwo.style.color = "red";
		answerTwo.style.backgroundColor = "black";
		answerTwo.style.border = "black";
		answerTwo.disabled = true;
		document.getElementById("A2").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}
}

function clickedAnswerThree(){



	if (correctAnswer == "3") {
		clickedCorrectAnswerThreeAudio();
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerThree.style.backgroundColor = "yellow";
		answerThree.style.border = "yellow";
		document.getElementById("A3").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		clickedWrongAnswerThreeAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerThree.style.color = "red";
		answerThree.style.backgroundColor = "black";
		answerThree.style.border = "black";
		answerThree.disabled = true;
		document.getElementById("A3").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}

}

function clickedAnswerFour(){



	if (correctAnswer == "4") {
		clickedCorrectAnswerFourAudio;
		points += pointsPerCorrectAnswer;
		document.getElementById("boxThree").innerHTML = points;
		stopTimer();
		disableButtons();
		responseButton.disabled = true;
		timeleft = 15;
		answerFour.style.backgroundColor = "yellow";
		answerFour.style.border = "yellow";
		document.getElementById("A4").style.backgroundColor = "yellow";
		responseButton.innerHTML = "Optime!";

		responseButton.style.color = "yellow";
		startButton.innerHTML = "Next Question!";
		startButton.disabled = false;


		unHideResponseNext();


	} else {

		clickedWrongAnswerFourAudio();
		points -= pointsPerCorrectAnswer/2;
		document.getElementById("boxThree").innerHTML = points;
		answerFour.style.color = "red";
		answerFour.style.backgroundColor = "black";
		answerFour.style.border = "black";
		answerFour.disabled = true;
		document.getElementById("A4").style.backgroundColor = "black";
		responseButton.style.color = "black";

		responseButton.innerHTML = "Eheu!";

	}


}
