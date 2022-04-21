/**
 * Returns the expression without the delimiters (`$`) and the `={result}`
 * @param {string} calc - Asciimath expression
 * @returns {string}
 */
declare function getCalcWithoutResult(calc: string): string;
export default getCalcWithoutResult;
