import { getSaatyScaleScore } from "../index";

/**
 * Creates the comparison table by comparing the specified attribute of each item
 * and giving it an score based on Saaty scale.
 * @param {Object} serializedItems - Items that will be compared
 * @param {string} attributeName - The name of the attribute of the items that will be compared
 * @param {'greater' | 'lesser'} betterWhen - Tell when the attribute is better
 * @returns {number[][]} Two-dimensional array with the comparison values between options
 */
function createComparisonTable(serializedItems: Record<string,number>[], attributeName: string, betterWhen: 'greater' | 'lesser'): number[][] {
  const currentAttributesValues = serializedItems.map(item => item[attributeName]);
  const greatestDif = Math.max(...currentAttributesValues) - Math.min(...currentAttributesValues);

  const comparisonTable = serializedItems.map((opt1) => {      
    return serializedItems.map((opt2) => {
      return getSaatyScaleScore(
        greatestDif, 
        opt1[attributeName], 
        opt2[attributeName], 
        betterWhen
      );
    });
  });

  return comparisonTable;
}

export default createComparisonTable;