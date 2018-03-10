

window.onload = function() {
 // Click events for the crystals   
    $("#crys-blue").on("click", function(){
        updateScore(crysBlue)
    });
    $("#crys-green").on("click", function(){
        updateScore(crysGreen)
    });
    $("#crys-purple").on("click", function(){
        updateScore(crysPurple)
    });
    $("#crys-yellow").on("click", function(){
        updateScore(crysYellow)
    });

// Click events for the scoreboard/instructions buttons
    $("#scoreboard").on("click", function(){
        $("#scoreboard").css("filter", "brightness(80%)");
        $("#instructions").css("filter", "brightness(100%)");
    });
    $("#instructions").on("click", function(){
        $("#instructions").css("filter", "brightness(80%)");
        $("#scoreboard").css("filter", "brightness(100%)");
    });

// sets initial instructions button brightness
    $("#instructions").css("filter", "brightness(80%)");

// start new game
    newGame();
};

// global variables
var winCount = 0;
var lossCount = 0;
var crysBlue = "";
var crysGreen = "";
var crysPurple = "";
var crysYellow = "";
var goal = 0;
var score = 0;


// generates random number when given min/max values (min/max are inclusive)
function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};

// starts new game
function newGame(){

// update variables with new random numnbers (except score goes back to 0)
goal = generateRandom(19, 120);
score = 0;
crysBlue = generateRandom(1, 12);
crysGreen = generateRandom(1, 12);
crysPurple = generateRandom(1, 12);
crysYellow = generateRandom(1, 12);

// update corresponding elements with new variable values
$("#goal").text(goal);
$("#score").text(score);
$("#wins").text("Wins: " + winCount);
$("#losses").text("Losses: " + lossCount);
};

// updates score when passed which crystal was clicked
function updateScore(crystalClicked){
    console.log(crystalClicked);
    score += crystalClicked;
    $("#score").text(score);
    gameStatus();
}
// checks to see if player has won/loss yet and 
// starts a new game if either condition is true
function gameStatus(){
    if(score > goal){
        lossCount++
        newGame();
    } else if(score === goal){
        winCount++
        newGame();
    }
}

