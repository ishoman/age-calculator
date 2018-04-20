const date = new Date(2018, 3, 20);
const birthDate = new Date(2017, 3, 20);

export class Planets {
  constructor (planet) {
    this.planet = planet;
  }

  mercuryAge() {
    return earthAge() / .24;
  }
}


// Helper Functions

function earthAge() {
  return (date.getTime() - birthDate.getTime()) / 1000;
}
