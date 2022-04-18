import { createComparisonTable, ponderation } from "../index";
import { Attribute, SerializedData, PonderationResults } from "../types";

/**
 * Object containing attribute info
 * @typedef {Object} Attribute
 * @property {string} name - Attribute name
 * @property {'greater' | 'lesser'} betterWhen - Tell when the attribute is better
 */

/**
 * Get the ponderation for each attribute informed
 * @param {SerializedData} data - Array containing the table data to be serialized.
 * @param {Attribute[]} attributes - Array containing attributes info
 * @returns {(Attribute & PonderationResults)[]} An array with de ponderation info for each attribute informed.
 */
 function getAttributesInfo(data: SerializedData, attributes: Attribute[]): (Attribute & PonderationResults)[] {      
  return attributes.map(atrb => {        
    
    const comparisonTable = createComparisonTable(
      data.serializedItems as Record<string, number>[], 
      atrb.name, 
      atrb.betterWhen
    );

    const optNames = data.attributesValues[Object.keys(data.attributesValues)[0]] as string[];
    
    return {
      ...atrb,
      ...ponderation(comparisonTable, optNames, atrb.name)
    }
  });
}

export default getAttributesInfo;