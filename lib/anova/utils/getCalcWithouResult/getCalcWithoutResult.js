"use strict";
exports.__esModule = true;
/**
 * Returns the expression without the delimiters (`$`) and the `={result}`
 * @param {string} calc - Asciimath expression
 * @returns {string}
 */
function getCalcWithoutResult(calc) {
    return calc.replace(/\$|=\d+/g, '');
}
exports["default"] = getCalcWithoutResult;
