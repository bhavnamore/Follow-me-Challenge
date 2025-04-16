var buttonColors=["red","green","blue","yellow"];
var gamesPattern=[];
var userPattern=[];
var started=false;
var level=0;
$(document).keydown(function(){
  $("#level-title").text("Level "+level);
  nextseq();
  started=true;
})
$(".btn").click(function(){
  var userChosenColor = $(this).attr("id");
  userPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePressed(userChosenColor);
  checkAnswer(userPattern.length-1);
})
function checkAnswer(currentLevel)
{
  if(userPattern[currentLevel] === gamesPattern[currentLevel])
  {
    console.log("success");
  if(userPattern.length === gamesPattern.length)
  {
    setTimeout(function(){
      nextseq();
    },1000);
  }
}
else
{
  console.log("wrong");
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function(){
    $(body).removeClass("game-over");
  },300);
  if(level <= 5)
    {
      $("#level-title").text("Game Over!!\nBetter luck next time");
    }
    else if(level <= 10)
    {
      $("#level-title").text("Game Over!!\nGreat Dude!!");
    }
    else
    {
      $("#level-title").text("Game Over!!\nExcellent");
    }
    startOver();
}
}
function nextseq(){
  userPattern = [];
  level++;
  $("#level-title").text("Level " + level); 
  var randomColor=Math.floor(Math.random()*4);
  var randomChosenColor=buttonColors[randomColor];
  gamesPattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}
function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
function animatePressed(currentColor)
{
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  },100);
}
function startOver(){
  level=0;
  started=false;
  gamespattern=[];
}