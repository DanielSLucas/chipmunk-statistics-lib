"use strict";
exports.__esModule = true;
/**
 * Calculates the F statistic for the given params
 * @param {number} meanSquareBetween Mean square between the columns
 * @param {number} meanSquareWithin Mean square within the columns
 * @returns {number} F statistic
 */
function fStatistic(meanSquareBetween, meanSquareWithin) {
    var fStatistic = meanSquareBetween / meanSquareWithin;
    return {
        fStatistic: fStatistic,
        record: {
            title: "Estatística F",
            calcs: [
                "$F=frac{".concat(meanSquareBetween, "}{").concat(meanSquareWithin, "}=").concat(fStatistic, "$"),
            ]
        }
    };
}
exports["default"] = fStatistic;
