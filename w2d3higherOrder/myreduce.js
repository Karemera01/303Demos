"use strict";

const arr = [1,2,3,4,5];
/**
 * 
 * @param {Array} arr to be processed
 * @param {*} cbk to map the elements
 * @returns {Array} of mapped elements
 */
function myMap(arr, cbk){
//IMPLEMENTATION NEEDED
}

const dblFun = num => num * 2;
const squareFun = num => num * num;

console.log("expect [2, 4, 6,8,10] ", arr.map(dblFun));
console.log("expect [2, 4, 6,8,10] ", myMap(arr, dblFun));

console.log("expect [4, 16, 36, 64, 100] ", arr.map(squareFun));
console.log("expect [4, 16, 36, 64, 100] ", myMap(arr, squareFun));

/**
 * 
 * @param {Array} arr to be processed
 * @param {Function} cbk callback
 * @param {*} initialVal value for the reduction

 * @returns {*} the reduction of the array
 * go through the array, call cbk with accumulator and element
 * return value of cbk becomes accumulator for next loop
 */
function myReduce(arr, cbk, initialVal){
//IMPLEMENTATION NEEDED
}

const sumFun = (accum, val) => accum + val;
const mulFun = (accum, val) => accum * val;


console.log("expect: 15: ", arr.reduce(sumFun, 0));
console.log("expect: 15: ", myReduce(arr, sumFun, 0));

console.log("expect: 120: ", arr.reduce(mulFun, 1));
console.log("expect: 120: ", myReduce(arr, mulFun, 1));

