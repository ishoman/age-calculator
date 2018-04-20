export const date = new Date(2018, 3, 20);
export const birthDate = new Date(2017, 3, 20);

export class Planet {
  constructor (planet) {
    this.planet = planet;
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
}

// Helper Functions
function earthAge() {
  return (date.getTime() - birthDate.getTime()) / 1000;
}
