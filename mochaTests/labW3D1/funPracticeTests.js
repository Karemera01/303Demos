"use strict";
/* global require */
/* eslint-disable */
const assert = require("assert");
const fun = require("./funPractice.js");

describe("map filter reduce", function () {

    beforeEach(function() {
        // runs before each test in this block
        const testArray = [1, 2, 3];
    });
    afterEach(function() {
        // runs after each test in this block
        assert.deepStrictEqual(testArray, [1, 2, 3]);  //all functions in this block should be pure
    });
    it("tests map with double", function () {
        function double(number) { return 2 * number;}
        assert.deepStrictEqual(fun.myMap([1, 2, 3], double), [2, 4, 6]);
    });

    it("tests map with cube", function () {
        function cube(number) { return number * number * number;}
        assert.deepStrictEqual(fun.myMap([1, 2, 3], cube), [1, 8, 27]);
    });

    it("tests filter with even", function () {
        function even(number) { return (number % 2 === 0);}
        assert.deepStrictEqual(fun.myFilter([1, 2, 3], even), [2]);
    });

    it("tests filter with > 1", function () {
        function greater1(number) { return (number > 1);}
        assert.deepStrictEqual(fun.myFilter([1, 2, 3], greater1), [2, 3]);
    });

    it("tests reduce with sum", function () {
        function sum(acc, number) { return (number + acc);}
        assert.strictEqual(fun.myReduce([1, 2, 3], sum, 0), 7);
    });

    it("tests reduce with mult", function () {
        function mult(acc, number) { return (number * acc);}
        assert.strictEqual(fun.myReduce([1, 2, 3], sum, 0), 6);
    });

});