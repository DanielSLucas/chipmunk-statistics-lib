"use strict";
exports.__esModule = true;
/**
 * Object containing the return of getFinalPriorities function
 * @typedef {Object} GetFinalPrioritiesReturn
 * @property {number[]} finalPriorities - Array with the priority of each item in the arr
 * @property {string} calc - The calculations made to get finalPriorities the priorities array
 */
/**
 * Calculates the final priority based on the other priorities
 * @param {number[][]} attributesPriorities - The options priorities for each attribute.
 * @param {number[]} ponderationPriorities - The attributes priorities.
 * @returns {GetFinalPrioritiesReturn}
 */
function getFinalPriorities(attributesPriorities, ponderationPriorities) {
    var calc = '$';
    var finalPriorities = attributesPriorities[0].map(function (_, i) {
        var total = 0;
        attributesPriorities.forEach(function (_, j) {
            calc += "".concat(j === 0 ? '' : '+', "(").concat(attributesPriorities[j][i].toFixed(2), "xx").concat(ponderationPriorities[j].toFixed(2), ")");
            total += (attributesPriorities[j][i] * ponderationPriorities[j]);
        });
        calc += "=".concat(total.toFixed(2), "$\n$");
        return total;
    });
    calc += '$';
    return { finalPriorities: finalPriorities, calc: calc };
}
exports["default"] = getFinalPriorities;
