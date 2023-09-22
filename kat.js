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
  