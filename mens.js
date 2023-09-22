

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