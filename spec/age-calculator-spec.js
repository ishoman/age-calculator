import { Date } from './../src/age-calculator.js';

describe("Date", function() {
  debugger;
  const date = new Date(2018, 3, 20);
  let today = Date.getTime();
  console.log(today);
  let birthDate = new Date(2017, 3, 20);

  beforeEach(function(){
    let today = date.getTime();
    let testDate = birthDate.getTime();
  });

  it("should convert a given date into age in seconds", function(){
    expect((date.getTime() - birthDate.getTime()) / 1000).toEqual(29894400);
  });

});


// expect(1).toEqual(1);
