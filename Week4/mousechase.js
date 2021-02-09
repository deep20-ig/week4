/*

N220 Section 26446
Deep Patel
Week 2 lecture
29 January 2021


*/
"use strict";
// this sets up the canvas the size of it 
function setup(){

    createCanvas(800, 600);

}
// this is the ball or circle size 
// x is a varible 
// y is a varible 
//xVel and y vel is set of 3 
const ball = {

    x : 80,
    y : 80, 
    xVel : 3,
    yVel : 3,
    radius : 45,
};
// where we start the counts and drae lets you draw on the cnavas 
function draw(){
//ball starts at count of 0
    let ballCount = 0;
// ball count is now 5 
    ballCount = 5;
// 5 +7 is the count of the ball 
    ballCount = ballCount +7;

    console.log(ballCount);
/// where is log and it was explained in lecture what each step does 



    let KevinIsCool = false;
//  has to be true or flase 
    if (ballCount > 5){
        ballCount = ballCount - 1;
    } else if (ballCount < 5) {
        ballCount = ballCount + 1;
    }else {
        console.log("Perfect");
    }
/// sets up ball if and else statesments like if ball count is higher than 5 then take 1 away or less than 5 add1 
   


    fill("#2e85d9");
// fill was from the website from lecture
    stroke("nostroke");

    ball.x = ball.x + ball.xVel;
   // ball.y = ball.y + ball.yVel;

  
   ball.xVel=0;
   ball.yVel=0;
   /// this what the ball or cirlce is set at the start 




    if(keyIsDown(LEFT_ARROW)){
        ball.x = ball.x  - 1;

    }
// makes it move -1 

    if (keyIsDown(RIGHT_ARROW)) {
        ball.x = ball.x  + 1;
    }
/// moves one ahead to the canvas 
    if (keyIsDown(UP_ARROW)){
        ball.y = ball.y - 1;

    }

/// moves one ahead to the canvas 
    if(keyIsDown(DOWN_ARROW)){
        ball.y = ball.y +1 ;

    }    

/// moves one ahead to the canvas 
    circle(ball.x, ball.y, ball.radius);
// set up the cirlce in the radius sixe when varibles were called beofre 
    
    if (ball.x > 800) ball.x=0;
    // if the ball is greater than 800 come to the other side 
    if (ball.x< 0) ball.x=800;
 // if the ball is less than than 800 come to the other side 
    if (ball.y > 600) ball.y=0;
 // if the ball is greater than 600 come to the other side 
    if (ball.y< 0) ball.y=600;
 // if the ball is less than 600 come to the other side 
}

    