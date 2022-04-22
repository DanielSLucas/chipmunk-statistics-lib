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
var index_1 = require("../index");
/**
 * Object with all the properties returned from the decide function.
 * @typedef {Object} DecisionResult
 * @property {Object} bestDecision - The object containing the data of the best decision
 * @property {number} bestDecisionPriority - The percentage of priority
 * @property {Object} record - The record of what was made in this function.
 */
/**
 * Decides, based on the inputs, which option is the best.
 * @param {PonderationResults[]} attributesInfo - The ponderation info for each attribute.
 * @param {PonderationResults} ponderationInfo - The ponderation info for the human input.
 * @param {SerializedData["serializedItems"]} serializedItems - The list of the options serialized as an object.
 * @returns {DecisionResult}
 */
function decide(attributesInfo, ponderationInfo, serializedItems) {
    var attributesPriorities = attributesInfo.map(function (item) { return item.priorities; });
    var ponderationPriorities = ponderationInfo.priorities;
    var _a = (0, index_1.getFinalPriorities)(attributesPriorities, ponderationPriorities), finalPriorities = _a.finalPriorities, finalPrioritiesCalc = _a.calc;
    var decisionIndex = finalPriorities.indexOf(Math.max.apply(Math, finalPriorities));
    var columnLabels = Object.keys(serializedItems[0]);
    var identifierKey = columnLabels.shift();
    var rowLabels = serializedItems.map(function (item) { return item[identifierKey]; });
    var table = (0, index_1.createTable)(attributesPriorities, {
        column: __spreadArray(__spreadArray([''], columnLabels, true), ['Total'], false),
        row: rowLabels
    }, finalPriorities, __spreadArray(__spreadArray(['P'], ponderationPriorities, true), [''], false));
    var record = {
        title: 'Decisão',
        table: table,
        calcs: [
            finalPrioritiesCalc,
        ]
    };
    return {
        bestDecision: serializedItems[decisionIndex],
        bestDecisionPriority: Number((finalPriorities[decisionIndex] * 100).toFixed(2)),
        record: record
    };
}
exports["default"] = decide;
