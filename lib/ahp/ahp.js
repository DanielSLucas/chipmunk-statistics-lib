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
var functions_1 = require("./functions");
/**
 * Info that must be informed by someone.
 * @typedef {Object} HumanInput
 * @property {number[][]} attributesPrioritiesTable
 * @property {Attribute[]} attributes
 */
/**
 * Uses AHP (Analytic Hierarchy Process) to make a decision based on the data
 * provided and human input.
 * @param {(string | number)[][]} data
 * @param {HumanInput} humanInput
 * @returns {AhpResult} The best decision and the record with the steps to reach that decision
 */
function ahp(data, humanInput) {
    var serializedData = (0, functions_1.serializeData)(data);
    var ponderationInfo = (0, functions_1.ponderation)(humanInput.attributesPrioritiesTable, humanInput.attributes.map(function (attr) { return attr.name; }), 'Ponderação');
    var attributesInfo = (0, functions_1.getAttributesInfo)(serializedData, humanInput.attributes);
    var decision = (0, functions_1.decide)(attributesInfo, ponderationInfo, serializedData.serializedItems);
    return {
        decision: decision.bestDecision,
        decisionPriority: decision.bestDecisionPriority,
        records: __spreadArray(__spreadArray([
            ponderationInfo.record
        ], attributesInfo.map(function (info) { return info.record; }), true), [
            decision.record,
        ], false)
    };
}
exports["default"] = ahp;
