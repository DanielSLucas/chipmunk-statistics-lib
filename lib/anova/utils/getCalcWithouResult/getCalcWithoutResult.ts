/**
 * Returns the expression without the delimiters (`$`) and the `={result}` 
 * @param {string} calc - Asciimath expression
 * @returns {string} 
 */
function getCalcWithoutResult(calc: string): string {
  return calc.replace(/\$|=\d+/g, '');
}

export default getCalcWithoutResult;