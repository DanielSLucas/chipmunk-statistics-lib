"use strict";
exports.__esModule = true;
var functions_1 = require("../../functions");
/**
 * Create the attributes Priotity Table
 * @param {string[]} attributes - Attributes names
 * @param {string[]} rankedAttributes - Attributes ordered by priority
 * @returns {number[][]} - Attributes comparison table
 */
function createAttributesPriotityTable(attributes, rankedAttributes) {
    return attributes.map(function (attributeRow) {
        return attributes.map(function (attributeCol) {
            var attributeRowValue = rankedAttributes.findIndex(function (attribute) { return attribute === attributeRow; }) + 1;
            var attributeColValue = rankedAttributes.findIndex(function (attribute) { return attribute === attributeCol; }) + 1;
            var highestDif = rankedAttributes.length - 1;
            return (0, functions_1.getSaatyScaleScore)(highestDif, attributeRowValue, attributeColValue, 'lesser');
        });
    });
}
exports["default"] = createAttributesPriotityTable;
