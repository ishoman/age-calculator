import { Date } from './../src/age-calculator.js';

describe("Date", function() {
  const date = (2018, 3, 20);
  let birthDate = new Date(2017, 3, 20);

  beforeEach(function(){
    let today = date.getTime();
    let testDate = birthDate.getTime();
  });

  it("should convert a given date into age in seconds", function(){
    expect((today - testDate) / 1000).toEqual(29894400);
  });

});
