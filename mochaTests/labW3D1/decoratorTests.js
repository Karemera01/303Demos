"use strict";
/* global require */
/* eslint-disable */
const assert = require("assert");
const dec = require("./decorator.js");

describe("spy", function() {
    it("records calls into its property", function() {
      function work() {}
  
      work = dec.spy(work);
      assert.deepEqual(work.calls, []);
  
      work(1, 2);
      assert.deepEqual(work.calls, [
        [1, 2]
      ]);
  
      work(3, 4);
      assert.deepEqual(work.calls, [
        [1, 2],
        [3, 4]
      ]);
    });
  
    it("transparently wraps functions", function() {
  
      let sum = (a, b) => a + b;
  
      let wrappedSum = dec.spy(sum);
  
      assert.equal(wrappedSum(1, 2), 3);
      assert.deepEqual(wrappedSum.calls, [ [1,2]]);
    });
  
  
    it("transparently wraps methods", function() {
  
      let calc = {
        sum: (a, b) => a + b
      };
  
      calc.wrappedSum = dec.spy(calc.sum);
  
      assert.equal(calc.wrappedSum(1, 2), 3);
      assert.deepEqual(calc.wrappedSum.calls, [ [1,2]]);
   
    });

});