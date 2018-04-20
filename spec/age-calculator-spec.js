import { Planets } from './../src/age-calculator.js';

describe("Date", function() {
    let date = new Date(2018, 3, 20);
    let birthDate = new Date(2017, 3, 20);
    let today = date.getTime();
    let testDate = birthDate.getTime();

  it("should convert a given date into age in seconds", function(){
    expect((today - testDate) / 1000).toEqual(31536000);
  });

  it("should convert age in earth years to age in mercury years", function(){
    debugger;
    let mercury = new Planets("Mercury")
    console.log(mercury);
    expect(mercury.mercuryAge()).toEqual(131400000);
  });
});


// expect(1).toEqual(1);
