 /* Opdracht Objectgeorienteerd programmeren
    Informatica - Emmauscollege Rotterdam
 */

/* ******************************************************* */
/* instellingen om foutcontrole van je code beter te maken */
/* ******************************************************* */
///<reference path="p5.global-mode.d.ts" />
"use strict"


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
class Mens {
  x;
  y;
  speedX;
  speedY;

  constructor(newX, newY, newSpeedX, newSpeedY) {
    this.x = newX;
    this.y = newY;
    this.speedX = newSpeedX;
    this.speedY = newSpeedY;
  }

  update() {
    this.x = this.x - this.speedX;
    this.y = this.y - this.speedY;
  }
}
var mensen;
const BREEDTE = 20;



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // initialiseer waarden
mensen = [  {x: 320,
    y: 100,
    speedX : 2,
    speedY : -4},
   {x: 500,
    y: 490,
    speedX : -3,
    speedY : 1},
    {x: 600,
    y: 400,
  speedX: 1,
speedY: 5},
{x: 900,
  y: 700,
speedX: -1,
speedY: -5},
{x: 50,
  y: 50,
speedX: -4,
speedY: 6}

   // voeg hier ZELF nog 3 extra mensobjecten toe.
   // na het laatste object GEEN komma
 ]; // 👆
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);

  // teken
 for (var i = 0; i < mensen.length; i++){
 
  rect(mensen[i].x, mensen[i].y, BREEDTE, BREEDTE);

  //update positie


   if (mensen[i].x <= 0 || mensen[i].x + BREEDTE >= width) {
     mensen[i].speedX = mensen[i].speedX * -1;
 }

   if (mensen[i].y <= 0 || mensen[i].y + BREEDTE >= height) {
    mensen[i].speedY = mensen[i].speedY * -1;
   }

 }


  // stuiter evt. tegen de kanten
 
}
