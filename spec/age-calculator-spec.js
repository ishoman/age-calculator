import { Planet, date, birthDate } from './../src/age-calculator.js';

describe("Date", function() {

  it("should convert a given date into age in seconds", function(){
    let date = new Date(2018, 3, 20);
    let birthDate = new Date(2017, 3, 20);
    expect((date.getTime() - birthDate.getTime()) / 1000).toEqual(31536000);
  });

  it("should convert age in earth years to age in Mercury years", function(){
    let mercury = new Planet("Mercury");
    expect(mercury.planetAge()).toEqual(131400000);
  });

  it("should convert age in earth years to age in Venus years", function(){
    let venus = new Planet("Venus");
    expect(venus.planetAge()).toEqual(50864516);
  });

  it("should convert age in earth years to age in Mars years", function(){
    let mars = new Planet("Mars");
    expect(mars.planetAge()).toEqual(16774468);
  });

  it("should convert age in earth years to age in Jupiter years", function(){
    let jupiter = new Planet("Jupiter");
    expect(jupiter.planetAge()).toEqual(2659021);
  });
});


// expect(1).toEqual(1);
