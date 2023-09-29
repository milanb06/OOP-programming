class Wappie extends Mens {
  setIsBesmet(besmetting) {
    super.setIsBesmet(false);
  }
    show(){
      noStroke();
        fill(150,255,255);
        rect(this.x, this.y, this.breedte, this.breedte);
    }
  }