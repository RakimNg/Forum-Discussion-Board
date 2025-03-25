const { expect } = require("chai");

// Function to test
const add = (a, b) => a + b;
const isEven = (num) => num % 2 === 0;

describe("Math Functions", function () {
    it("should add two numbers correctly", function () {
        expect(add(2, 3)).to.equal(5);
    });

    it("should return true for even numbers", function () {
        expect(isEven(4)).to.be.true;
    });

    it("should return false for odd numbers", function () {
        expect(isEven(5)).to.be.false;
    });
});
