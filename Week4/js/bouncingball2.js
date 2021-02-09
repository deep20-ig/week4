/*

N220 Section 26446
Deep Patel
Week 3 lecture
12 FeB 2021

*/

"use strict"

const ls = {

hitlyStyle : "Consular",
blabColor : "blue",
focusingLens : "Prayt dragon peral",
attackSpeed : 7,
damage : 24,
durability : 105,

}


function setup () {

    createCanvas (800,600);

    let answer = 42;
    let starWarsQoute = "I have a bad feeling"

   // console.log(ls.hitlyStyle);

    ls.hitlyStyle = "Eradicator";

    ls.durability = ls.durability - 1;

    //doDamge(enemy, ls.damage);

    answer = 59;
    starWarsQoute = "laugh it up silly"

}
 function draw(){

    ls.durability = addAmount(ls.durability,42);
    background ("blue");
    circle (200,200,25);
    rect (300,400,400,200);

 }

 function collisionCircleCircle(circleX, circleY, circleRadius,otherCircleX, otherCircleY, otherCircleRadius){

    let disX = circleX - otherCircleX;
    let distY = circleY - otherCircleY;

    let xsquared = disX * disX;
    let ysquared = distY * distY;

    let dist = Math.sqrt(xsquared + ysquared);

    let radii = circleRadius + otherCircleRadius;
   
    if (radii > dist) return false;

    return true;

 }

 function collisionCircleRect (rectX, rectY, rectW, rectH, circleX, circleY, circleR){

    if (circleY < rectY) return false;
    if (circleY > rectY + rectH) return false;
    if (circleX < rectX) return false;
    if (circleX < rectX + rectW) return false;

    return true;

 }

function drawShape(x,y){


    Push();
    Fill("blue");
    stroke ("green");
    translate (x,y);

    circle (0,0,40);
    rect(-5, -5, 30,12 );

    pop();
}
function addFive(x){

    let label = "luck" ;

   let answer = x + 5;

   return answer ;

}

function addAmount (initial, amountoAdd){

    let answer = initial + amountoAdd
    if (answer > 100) {
        answer = 100;
    }
    if (answer < 0) answer = 0;

    return answer;

    }
