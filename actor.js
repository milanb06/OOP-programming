class Actor {
    x;
    y;
    speedX;
    speedY;
    breedte;
    #isBesmet;
    
    constructor(x, y, speedX, speedY) {
      this.x = x;
      this.y = y;
      this.speedX = speedX;
      this.speedY = speedY;
      this.#isBesmet = false;
      this.besmettelijkheidsteller = 0;
    }

    getIsBesmet(){
        return this.#isBesmet
    }

    setIsBesmet(besmetting) {
      this.#isBesmet = besmetting;
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
  