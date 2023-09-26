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




var actoren = [];




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
  for (var teller = 0; teller < 25; teller++) {
    // we moeten ze niet te dicht bij de rand tekenen
    // om geen problemen met stuiteren te krijgen
    var ruimteTotRand = 50;
    
    // creëer random positie en snelheid
    var randomX = random(ruimteTotRand, width - ruimteTotRand);
    var randomY = random(ruimteTotRand, height - ruimteTotRand);
    var randomSpeedX = random(-7, 7);
    var randomSpeedY = random(-7, 7);
  
    // maak nieuw mensobject
    var nieuwMens = new Mens(randomX, randomY, randomSpeedX, randomSpeedY);
    
    // voeg mensobject toe aan array
    actoren.push(nieuwMens);
  }
  for (var teller = 0; teller < 10; teller++) {
    // we moeten ze niet te dicht bij de rand tekenen
    // om geen problemen met stuiteren te krijgen
    var ruimteTotRand = 50;
    
    // creëer random positie en snelheid
    var randomX = random(ruimteTotRand, width - ruimteTotRand);
    var randomY = random(ruimteTotRand, height - ruimteTotRand);
    var randomSpeedX = random(-3, 3);
    var randomSpeedY = random(-3, 3);
  
    // maak nieuw mensobject
    var nieuwKat = new Kat(randomX, randomY, randomSpeedX, randomSpeedY);
    
    // voeg mensobject toe aan array
    actoren.push(nieuwKat);
  }
  for (var teller = 0; teller < 5; teller++) {
    // we moeten ze niet te dicht bij de rand tekenen
    // om geen problemen met stuiteren te krijgen
    var ruimteTotRand = 50;
    
    // creëer random positie en snelheid
    var randomX = random(ruimteTotRand, width - ruimteTotRand);
    var randomY = random(ruimteTotRand, height - ruimteTotRand);
    var randomSpeedX = random(-7, 7);
    var randomSpeedY = random(-7, 7);
  
    // maak nieuw mensobject
    var nieuwWappie = new Wappie(randomX, randomY, randomSpeedX, randomSpeedY);
    
    // voeg mensobject toe aan array
    actoren.push(nieuwWappie);
  }
  actoren.push(new Dokter(width / 2, height / 2, 3, 5));

  actoren[0].isBesmet = true;
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);

  var aantalBesmet = 0;
  var aantalOnbesmet= 0;
  for (var i = 0; i < actoren.length; i++) {
    // verwijs met 'mens' naar het mens-object die bij deze
    // iteratie van de loop hoort.
    var actor = actoren[i];
    
    // teken
    actor.show();

    // update positie en stuiter eventueel
    actor.update();
    if (actor.isBesmet){
      aantalBesmet = aantalBesmet +1;
    }
    else {
      aantalOnbesmet = aantalOnbesmet +1;
    }
  }
  noStroke();
  textSize(15);
  fill(255,255,255);
  text("Besmet: " + aantalBesmet, 1100, 30);
  text("Onbesmet: " + aantalOnbesmet, 1100, 60);

  // teken
  for (var i = 0; i < actoren.length; i++) {
    // verwijs met 'mens' naar het mens-object die bij deze
    // iteratie van de loop hoort.
    var actor = actoren[i];
    
    // teken
    actor.show();

    // update positie en stuiter eventueel
    actor.update();
  }
  for (var i = 0; i < actoren.length; i++) {
    var actorA = actoren[i];
    // ga met actorA opnieuw alle mensen langs om te checken op overlap, behalve met zichzelf
    for (var j = i+1; j < actoren.length; j++) {
      var actorB = actoren[j];
      if (actorA != actorB) {
        // check overlap
        var actorenOverlappen = actorA.isOverlappend(actorB);
        if (actorenOverlappen) {
          // check of er een besmetting optreedt
          if (actorA.isBesmet || actorB.isBesmet) {
            if (actorA instanceof Dokter || actorB instanceof Dokter) {
              // minimaal één van de mensen is dokter,
              // dus ze worden / blijven beide gezond
              actorA.isBesmet = false;
              actorB.isBesmet = false;
            }
            if (actorA instanceof Wappie && actorB != Dokter){
              actorB.isBesmet = true;

            }
            else {
              // geen van de mensen is dokter, dus
              // als er één besmet is, wordt ze allebei besmet
              // als ze allebei besmet zijn, verandert deze code niets.
              actorA.isBesmet = true;
              actorB.isBesmet = true;
            }
          }
        }
      }
    }
  }
  // stuiter evt. tegen de kanten
 
}
