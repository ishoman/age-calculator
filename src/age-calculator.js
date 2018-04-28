export const today = new Date(2018, 3, 20);
export const birthDate = new Date(2017, 3, 20);

export class Planet {
  constructor (planet, lifeExpectancy) {
    this.planet = planet;
    this.date = birthDate;
    this.lifeExpectancy = lifeExpectancy;
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

  planetLifeExp() {
    let age;
    if(this.planet === "Mercury") {
      age = Math.floor((earthAge() / 3.154e+7) / .24);
      return this.lifeExpectancy - age;
    } else if (this.planet === "Venus") {
      return Math.floor(earthAge() / .62);
    } else if (this.planet === "Mars") {
      return Math.floor(earthAge() / 1.88);
    } else if (this.planet === "Jupiter") {
      return Math.floor(earthAge() / 11.86);
    } else {
      return lifeExp();
    }

  }

  lifeExp() {
    let life = this.lifeExpectancy;
    let age = Math.floor((today.getTime() - birthDate.getTime()) / 31536000000)
    return life - age;
  }
}


// Helper Functions
function earthAge() {
  return (today.getTime() - birthDate.getTime()) / 1000;
}
