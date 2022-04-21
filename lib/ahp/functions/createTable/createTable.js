"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
/**
 * Creates the table with the sums and priority vector.
 * @param {number[][]} arr - An array of numbers.
 * @param {string[]} labels - Column labels.
 * @param {number[]} priorities - Row priorities.
 * @param {number[]} lastRow - Last row values.
 * @returns {(string | number)[]} The table with the sums and priority vector
 */
function createTable(arr, labels, priorities, lastRow) {
    var tableBody = arr.map(function (row, i) {
        return __spreadArray(__spreadArray([labels.row[i]], row, true), [priorities[i]], false);
    });
    var table = __spreadArray(__spreadArray([
        labels.column
    ], tableBody, true), [
        lastRow,
    ], false);
    return table;
}
exports["default"] = createTable;
