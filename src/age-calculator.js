export const today = new Date(2018, 3, 20);
export const birthDate = new Date(2017, 3, 20);

export class Planet {
  constructor (planet) {
    this.planet = planet;
    this.date = birthDate;
    this.lifeExpectancy = 76;
  }

  planetAge() {
    if(this.planet === "Mercury") {
      return earthAge() / .24;
    } else if (this.planet === "Venus") {
      return Math.floor(earthAge() / .62);
    } else if (this.planet === "Mars") {
      return Math.floor(earthAge() / 1.88);
    } else if (this.planet === "Jupiter") {
      return Math.floor(earthAge() / 11.86);
    } else {
      return earthAge();
    }
  }

//   lifeExp() { // Not yet functional
//     debugger;
//     let life = this.lifeExpectancy * 3.154e+10;
//     return ((life - birthDate.getTime()) / 1000)
//   }
}


// Helper Functions
function earthAge() {
  return (today.getTime() - birthDate.getTime()) / 1000;
}
