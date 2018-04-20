import { Date } from './../src/age-calculator.js';

describe("Date", function() {
  debugger;
  let date = new Date(2018, 3, 20);
  let today = date.getTime();

  it("should convert a given date into age in seconds", function(){
    let birthDate = new Date(2017, 3, 20);
    let testDate = birthDate.getTime();
    expect((today - testDate) / 1000).toEqual(29894400);
  });

});


// expect(1).toEqual(1);
