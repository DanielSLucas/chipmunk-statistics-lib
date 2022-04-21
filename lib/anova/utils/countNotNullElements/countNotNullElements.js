"use strict";
exports.__esModule = true;
/**
 * Counts the number of not null elements in an array.
 * @param {any[]} arr - Uni or multidimensional array
 * @returns {number} The number of elements
 */
function countNotNullElements(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            count += countNotNullElements(arr[i]);
            continue;
        }
        if (arr[i]) {
            count += 1;
        }
    }
    return count;
}
exports["default"] = countNotNullElements;
