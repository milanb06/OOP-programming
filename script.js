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

class Actor {
  x;
  y;
  speedX;
  speedY;
  breedte;
  isBesmet;
  
  constructor(x, y, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.isBesmet = false;
    this.besmettelijkheidsteller = 0;
  }
  
  show(){
  }
  besmet(){}
  update() {
    this.x = this.x - this.speedX;
    this.y = this.y - this.speedY;

    if (this.x <= 0 || this.x + this.breedte >= width) {
      this.speedX = this.speedX * -1;
  }
 
    if (this.y <= 0 || this.y + this.breedte >= height) {
    this.speedY = this.speedY * -1;
    }
    this.besmettelijkheidsTeller--;
    if (this.besmettelijkheidsTeller === 0) {
      this.isBesmet = false;
    }
  }
  isOverlappend(andereActor) {
    // zet teruggeefwaarde standaard op false
    var overlappend = false;
  
    // zet teruggeefwaarde op true als er een overlap is
    if ( (this.x >= andereActor.x &&
          this.x <= andereActor.x + andereActor.breedte &&
          this.y >= andereActor.y &&
          this.y <= andereActor.y + andereActor.breedte)||
        (this.x >= andereActor.x &&
            this.x <= andereActor.x + andereActor.breedte &&
            this.y + this.breedte>= andereActor.y &&
            this.y + this.breedte <= andereActor.y + andereActor.breedte)||
          (this.x + this.breedte >= andereActor.x &&
              this.x + this.breedte <= andereActor.x + andereActor.breedte &&
              this.y >= andereActor.y &&
              this.y <= andereActor.y + andereActor.breedte)||
              (this.x + this.breedte >= andereActor.x &&
                this.x + this.breedte<= andereActor.x + andereActor.breedte &&
                this.y + this.breedte>= andereActor.y &&
                this.y + this.breedte<= andereActor.y + andereActor.breedte)
          /* VUL HIER ZELF LATER AAN VOOR DE ANDERE HOEKEN*/
        ) {
  
      overlappend = true;
    }
  
    // stuur de teruggeefwaarde terug
    return overlappend;
  }
  
    // stuur de teruggeefwaarde terug

}

class Mens extends Actor {
  constructor(x, y, speedX, speedY) {
    // roep de constructor van Actor aan
    super(x, y, speedX, speedY);

    // geef breedte een correcte waarde
    this.breedte = 20;
  }

  show() {
    noStroke();
    if (this.isBesmet === true) {
      fill(255, 0, 0);      // rood
    }
    else {
      fill(255, 255, 255);  // wit
    }

    rect(this.x, this.y, this.breedte, this.breedte);
  }
  besmet() {
    this.besmettelijkheidsTeller = 400;
    this.isBesmet = true;
  }
}

class Kat extends Actor {
  constructor(x, y, speedX, speedY) {
    // roep de constructor van Actor aan
    super(x, y, speedX, speedY);

    // geef breedte een correcte waarde
    this.breedte = 10;
  }

  show() {
    noStroke();
    if (this.isBesmet === true) {
      fill(255, 140, 0);   // oranje
    }
    else {
      fill(0, 0, 255);     // blauw
    }

    rect(this.x, this.y, this.breedte, this.breedte);
  }
  besmet() {
    this.besmettelijkheidsTeller = 200;
    this.isBesmet = true;
  }
}

class Dokter extends Mens {
  show(){
    noStroke();
      fill(255,255,255);
      rect(this.x, this.y, this.breedte, this.breedte);

      strokeWeight(5);
      stroke(255, 0, 0); // rood
      line(this.x + this.breedte / 2, this.y,
      this.x + this.breedte / 2, this.y + this.breedte);
      line(this.x, this.y + this.breedte / 2,
      this.x + this.breedte, this.y + this.breedte / 2);
  }
}
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
