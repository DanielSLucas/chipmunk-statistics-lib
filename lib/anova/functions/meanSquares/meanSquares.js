"use strict";
exports.__esModule = true;
/**
 * Return of meanSquare function
 * @typedef {Object} MeanSquaresReturn
 * @property {number} between mean square columns/between (MSC)
 * @property {number} within mean square within/error (MSE)
 */
/**
 * Calculates the mean square for the given params
 * @param {SumOfSquares} sumOfSquares sum of squares of columns/between (SSC) or within/error (SSE)
 * @param {DegreesOfFreedom} degreesOfFreedom degrees of freedom of columns/between (DFc) or within/error (DFe)
 * @returns {MeanSquares} The mean square
 */
function meanSquares(squaresSums, freedomDegrees) {
    var between = squaresSums.between / freedomDegrees.between;
    var within = squaresSums.within / freedomDegrees.within;
    var record = {
        title: "Quadrado médio",
        calcs: [
            "$QME=frac{".concat(squaresSums.between.toFixed(2), "}{").concat(freedomDegrees.between.toFixed(2), "}=").concat(between.toFixed(2), "$"),
            "$QMD=frac{".concat(squaresSums.within.toFixed(2), "}{").concat(freedomDegrees.within.toFixed(2), "}=").concat(within.toFixed(2), "$"),
        ]
    };
    return {
        between: between,
        within: within,
        record: record
    };
}
exports["default"] = meanSquares;
