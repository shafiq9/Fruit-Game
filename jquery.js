var playing = false;
var score;
var trialsLeft;
var step;
var action;//used fro the setInterval
var fruits = ['apple', 'pineapple', 'banana', 'cherries', 'grapes', 'mango', 'peach', 'pear', 'watermelon', 'apricot', 'blackberry', 'blueberry', 'coconut', 'fig', 'guava', 'pomegranat', 'strawberry', 'orange', 'greenapple', 'papaya', 'lemon', 'lychee', 'tomato', 'carrot'];

        $(function(){
         // click on start reset button
            $("#startreset").click(function(){

            // we are playing
            if(playing == true){

            // reload page
            location.reload();
            }else{

             //we are not playing
             playing = true;//game is initiated

            //set score to 0
            score = 0;// set score to 0
            $("#scorevalue").html(score);

            // show trials left
            $("#trialsLeft").show();
            trialsLeft = 3;
            addHearts();

            //hide game over box
            $("#gameover").hide();
                
            // change button text to reset game
            $("#startreset").html("Reset Game");

            //start sending fruits
            startAction();
                }
            });   
                  
$("#fruit1").mouseover(function(){
score++;
$("#scorevalue").html(score);//updating the score
    
//document.getElementById("slicesound").play();
$("#slicesound")[0].play();//play sound
    
//stop fruit 
clearInterval(action);
    
//hide fruit
$("#fruit1").hide("explode", 500);//slicing the fruit
    
//send new fruit
setTimeout(startAction, 500);
    
});
            
// slice afruit
// play sound
// explode fruit

// Functions
function addHearts(){
$("#trialsLeft").empty();
for(i=0; i<trialsLeft; i++){
$("#trialsLeft").append('<img src="images/heart.png" class="life">');
           }
}

// start sending fruits
function startAction(){
//generate fruit
$("#fruit1").show();
choosefruit();//choose a random fruits
$("#fruit1").css({'left': Math.round(550*Math.random()), 'top':-50});//random position
    
//generate random step
step = 1+Math.round(5*Math.random());//change step
    
//move fruit down by one step every 10ms
action = setInterval(function(){
//move fruit by one step
$("#fruit1").css('top', $("#fruit1").position().top + step);
    
//check if the fruit is too low
if($("#fruit1").position().top > $("#fruitContainer").height()){
    
// check if we any trials left
if(trialsLeft > 1){
    
 //generate fruit
$("#fruit1").show();
choosefruit();//choose a random fruits
$("#fruit1").css({'left': Math.round(550*Math.random()), 'top':-50});//random position
    
//generate random step
step = 1+Math.round(5*Math.random());//change step  
    
//reduce trials by one
trialsLeft --;
    
//populate trialsLeft box
addHearts();
   }else{//game over
playing = false;//we are not playing anymore

$("#startreset").html("Start Game");// change button to Start Game
$("#gameover").show();
$("#gameover").html('<p>Game Over!</p><p>Your Score is ' + score + '</p>');
$("#trialsLeft").hide();
stopAction();
   }
   }
}, 15);
}

// generate random fruits
function choosefruit(){
$("#fruit1").attr('src', 'images/'+ fruits[Math.round(23*Math.random())] +'.png');
}

//stop dropping fruits
function stopAction(){
clearInterval(action);
$("#fruit1").hide();
}
});