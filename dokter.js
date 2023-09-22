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