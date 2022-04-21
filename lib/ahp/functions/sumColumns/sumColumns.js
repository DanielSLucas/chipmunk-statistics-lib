"use strict";
exports.__esModule = true;
/**
 * Object containing the return of sumColumns function
 * @typedef {Object} SumColumnsReturn
 * @property {number[]} sums - Array with the sum of each column values
 * @property {string} calc - The calculations made to get the sums array
 */
/**
 * Calculates the sum of each column values
 * @param {number[][]} arr - An array of numbers.
 * @returns {SumColumnsReturn}
 */
function sumColumns(arr) {
    var calc = '$';
    var sums = arr.map(function (row, i) {
        var sum = 0;
        row.forEach(function (_, j) {
            calc += "".concat(j === 0 ? '' : '+').concat(arr[j][i].toFixed(2));
            sum += arr[j][i];
        });
        calc += "=".concat(sum.toFixed(2), "$\n$");
        return sum;
    });
    calc += '$';
    return { sums: sums, calc: calc };
}
exports["default"] = sumColumns;
