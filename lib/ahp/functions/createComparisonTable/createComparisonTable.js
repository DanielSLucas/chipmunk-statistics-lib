"use strict";
exports.__esModule = true;
var index_1 = require("../index");
/**
 * Creates the comparison table by comparing the specified attribute of each item
 * and giving it an score based on Saaty scale.
 * @param {Object} serializedItems - Items that will be compared
 * @param {string} attributeName - The name of the attribute of the items that will be compared
 * @param {'greater' | 'lesser'} betterWhen - Tell when the attribute is better
 * @returns {number[][]} Two-dimensional array with the comparison values between options
 */
function createComparisonTable(serializedItems, attributeName, betterWhen) {
    var currentAttributesValues = serializedItems.map(function (item) { return item[attributeName]; });
    var greatestDif = Math.max.apply(Math, currentAttributesValues) - Math.min.apply(Math, currentAttributesValues);
    var comparisonTable = serializedItems.map(function (opt1) {
        return serializedItems.map(function (opt2) {
            return (0, index_1.getSaatyScaleScore)(greatestDif, opt1[attributeName], opt2[attributeName], betterWhen);
        });
    });
    return comparisonTable;
}
exports["default"] = createComparisonTable;
