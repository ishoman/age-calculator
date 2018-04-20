import { Date } from './../src/age-calculator.js';

describe("Date", function() {
  const date = (2018, 3, 20)
  let birthDate = new Date(2017, 3, 20)
  it("should convert a given date into age in seconds", function(){
    expect((date.getTime() - birthDate.getTime())*1000).toEqual(31571837.531)
  });

});
