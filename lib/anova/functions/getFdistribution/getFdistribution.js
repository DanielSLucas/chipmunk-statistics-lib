"use strict";
exports.__esModule = true;
var Fdistributions = require('./Fdistributions.json');
/**
 * Gets the F distribution of Fisher-Snedecor for the given alpha,
 * DFB (degrees of freedom between) and DFW (degrees of freedom within)
 * @param {'0.5%'|'1%'|'2.5%'|'5%'|'10%'} alpha
 * @param {number} DFB
 * @param {number} DFW
 * @returns {number}
 */
function getFdistribution(alpha, DFB, DFW) {
    return Fdistributions[alpha]["".concat(DFB, "x").concat(DFW)];
}
exports["default"] = getFdistribution;
