"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var functions_1 = require("./functions");
/**
 * Return of anova function
 * @typedef {Object} AnovaReturn
 * @property {SumOfSquares} sumOfSquares
 * @property {DegreesOfFreedom} degreesOfFreedom
 * @property {MeanSquares} squaresMeans
 * @property {number} fStatistic
 * @property {number} fdistribution
 * @property {boolean} isApproved
 * @property {Record[]} records
 */
/**
 * Calculates the one-way ANOVA
 * @param {(number | null)[][]} samples Two-dimensional numeric array of samples
 * @param {'0.5%'|'1%'|'2.5%'|'5%'|'10%'} alpha
 * @returns {AnovaResults}
 */
function anova(samples, alpha) {
    var _a = (0, functions_1.sumOfSquares)(samples), SSrecord = _a.record, squaresSums = __rest(_a, ["record"]);
    var _b = (0, functions_1.degreesOfFreedom)(samples), DFrecord = _b.record, freedomDegrees = __rest(_b, ["record"]);
    var _c = (0, functions_1.meanSquares)(squaresSums, freedomDegrees), MSrecord = _c.record, squaresMeans = __rest(_c, ["record"]);
    var _d = (0, functions_1.fStatistic)(squaresMeans.between, squaresMeans.within), fStatrecord = _d.record, fStat = _d.fStatistic;
    var fdistribution = (0, functions_1.getFdistribution)(alpha, freedomDegrees.between, freedomDegrees.within);
    var isApproved = fStat < fdistribution;
    return {
        sumOfSquares: squaresSums,
        degreesOfFreedom: freedomDegrees,
        squaresMeans: squaresMeans,
        fStatistic: fStat,
        fdistribution: fdistribution,
        isApproved: isApproved,
        records: [
            SSrecord,
            DFrecord,
            MSrecord,
            fStatrecord
        ]
    };
}
exports["default"] = anova;
