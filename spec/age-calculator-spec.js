import { Planet, today, birthDate } from './../src/age-calculator.js';

describe("Age on Planets", function() {
  let earth = new Planet("Earth", 76)
  let mercury = new Planet("Mercury", 317);
  let venus = new Planet("Venus", 123);
  let mars = new Planet("Mars", 40);
  let jupiter = new Planet("Jupiter", 6);

  it("should convert a given date into age in seconds", function(){
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
    let today = new Date(2018, 3, 20);
    let inputtedDate = new Date(2018, 3, 19);
    expect((today.getTime() - inputtedDate.getTime()) / 1000).toEqual(86400);
  });

  it("should calculate the life expectancy on earth", function() {
    expect(earth.planetLifeExp()).toEqual(75);
  });

  it("should calculate the life expectancy on various planets", function() {
    expect(mercury.planetLifeExp()).toEqual(313);
    expect(venus.planetLifeExp()).toEqual(121);
    expect(mars.planetLifeExp()).toEqual(39.46815256546904);
    expect(jupiter.planetLifeExp()).toEqual(5.915693661305379);
  });
});
