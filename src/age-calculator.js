const date = new Date(2018, 3, 20);
const birthDate = new Date(2017, 3, 20);

export class Planets {
  constructor (planet) {
    this.planet = planet;
  }

  mercuryAge() {
    let earthAge = (date.getTime() - birthDate.getTime()) / 1000;
    let mercury = earthAge / .24;
    return mercury;
  }
}

function earthAge() {
  return (date.getTime() - birthDate.getTime()) / 1000;
}
