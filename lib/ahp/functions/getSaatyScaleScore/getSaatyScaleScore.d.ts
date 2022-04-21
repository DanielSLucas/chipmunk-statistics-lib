/**
 * Compares two options and gives the score based on the saaty scale.
 * @param {number} greatestDif - The best option value minus the worst option value.
 * @param {number} op1Value - Option one value.
 * @param {number} op2Value - Option two value.
 * @param {'greater' | 'lesser'} betterWhen - Tells if the attribute value that is beeing compared is better when lesser or greater.
 * @returns {number} The score based on the saaty scale.
 * 1 - equal;
 * 3 - slightly superior;
 * 5 - superior;
 * 7 - significantly superior;
 * 9 - extremely superior;
 *
 * OR
 *
 * 1/1 - equal;
 * 1/3 - slightly inferior;
 * 1/5 - inferior;
 * 1/7 - significantly inferior;
 * 1/9 - extremely inferior;
 */
declare function getSaatyScaleScore(greatestDif: number, op1Value: number, op2Value: number, betterWhen: 'greater' | 'lesser'): number;
export default getSaatyScaleScore;
