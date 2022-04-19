import { getSaatyScaleScore } from "../../functions";

/**
 * Create the attributes Priotity Table
 * @param {string[]} attributes - Attributes names
 * @param {string[]} rankedAttributes - Attributes ordered by priority
 * @returns {number[][]} - Attributes comparison table
 */
function createAttributesPriotityTable(attributes: string[], rankedAttributes: string[]): number[][] {
  return attributes.map((attributeRow) => {
    return attributes.map((attributeCol)=> {
      const attributeRowValue = rankedAttributes.findIndex(attribute => attribute === attributeRow) + 1;
      const attributeColValue = rankedAttributes.findIndex(attribute => attribute === attributeCol) + 1;
      const highestDif = rankedAttributes.length - 1;
      return getSaatyScaleScore(highestDif, attributeRowValue, attributeColValue, 'lesser');
    });
  });
}

export default createAttributesPriotityTable;