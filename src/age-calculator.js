const date = new Date(2018, 3, 20);
const birthDate = new Date(2017, 3, 20);

export class Planets {
  constructor (planet) {
    this.planet = planet;
  }

  mercuryAge() {
    return earthAge() / .24;
  }

  venusAge() {
    return Math.floor(earthAge() / .62)
  }

  marsAge() {
    return Math.floor(earthAge() / 1.88)
  }

  jupiterAge() {
    return Math.floor(earthAge() / 11.86)
  }

}


// Helper Functions
function earthAge() {
  return (date.getTime() - birthDate.getTime()) / 1000;
}
