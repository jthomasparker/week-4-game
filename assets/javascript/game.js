window.onload = function() {
    
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

    $("#scoreboard").on("click", function(){
        $("#scoreboard").css("filter", "brightness(80%)");
        $("#instructions").css("filter", "brightness(100%)");

    });

    $("#instructions").on("click", function(){
        $("#instructions").css("filter", "brightness(80%)");
        $("#scoreboard").css("filter", "brightness(100%)");

    });

    $("#instructions").css("filter", "brightness(80%)");
    newGame();
   
};


var winCount = 0;
var lossCount = 0;
var crysBlue = "";
var crysGreen = "";
var crysPurple = "";
var crysYellow = "";
var goal = 0;
var score = 0;



function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};


function newGame(){
goal = generateRandom(19, 120);
score = 0;
crysBlue = generateRandom(1, 12);
crysGreen = generateRandom(1, 12);
crysPurple = generateRandom(1, 12);
crysYellow = generateRandom(1, 12);

$("#goal").text(goal);
$("#score").text(score);
$("#wins").text("Wins: " + winCount);
$("#losses").text("Losses: " + lossCount);


};

function updateScore(crystalClicked){
    console.log(crystalClicked);
    score += crystalClicked;
    $("#score").text(score);
    gameStatus();
}

function gameStatus(){
    if(score > goal){
        lossCount++
        newGame();
    } else if(score === goal){
        winCount++
        newGame();
    }
}

