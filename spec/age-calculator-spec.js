import { Planet, today, birthDate } from './../src/age-calculator.js';

describe("Age on Planets", function() {
  let mercury = new Planet("Mercury");
  let venus = new Planet("Venus");
  let mars = new Planet("Mars");
  let jupiter = new Planet("Jupiter");

  it("should convert a given date into age in seconds", function(){
    // let date = new Date(2018, 3, 20);
    // let birthDate = new Date(2017, 3, 20);
    expect((today.getTime() - birthDate.getTime()) / 1000).toEqual(31536000);
  });

  it("should convert age in earth years to age in Mercury years", function(){
    expect(mercury.planetAge()).toEqual(131400000);
  });

  it("should convert age in earth years to age in Venus years", function(){
    expect(venus.planetAge()).toEqual(50864516);
  });

  it("should convert age in earth years to age in Mars years", function(){
    expect(mars.planetAge()).toEqual(16774468);
  });

  it("should convert age in earth years to age in Jupiter years", function(){
    expect(jupiter.planetAge()).toEqual(2659021);
  });

  it("should output the time, in seconds, between two given dates", function() {
    expect((today.getTime() - inputtedDate.getTime()) / 1000).toEqual(86400);
  });

});
