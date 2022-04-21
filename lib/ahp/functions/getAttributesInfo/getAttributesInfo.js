"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var index_1 = require("../index");
/**
 * Object containing attribute info
 * @typedef {Object} Attribute
 * @property {string} name - Attribute name
 * @property {'greater' | 'lesser'} betterWhen - Tell when the attribute is better
 */
/**
 * Get the ponderation for each attribute informed
 * @param {SerializedData} data - Array containing the table data to be serialized.
 * @param {Attribute[]} attributes - Array containing attributes info
 * @returns {(Attribute & PonderationResults)[]} An array with the ponderation info for each attribute informed.
 */
function getAttributesInfo(data, attributes) {
    return attributes.map(function (atrb) {
        var comparisonTable = (0, index_1.createComparisonTable)(data.serializedItems, atrb.name, atrb.betterWhen);
        var optNames = data.attributesValues[Object.keys(data.attributesValues)[0]];
        return __assign(__assign({}, atrb), (0, index_1.ponderation)(comparisonTable, optNames, atrb.name));
    });
}
exports["default"] = getAttributesInfo;
