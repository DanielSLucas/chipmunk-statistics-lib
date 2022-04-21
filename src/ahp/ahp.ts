import { decide, getAttributesInfo, ponderation, serializeData } from "./functions";
import { Attribute, Record } from "./functions/types";

export interface HumanInput {
  attributesPrioritiesTable: number[][],
  attributes: Attribute[];
}

interface AhpResult {
  decision: Object;
  records: Record[];
}

/**
 * Info that must be informed by someone.
 * @typedef {Object} HumanInput
 * @property {number[][]} attributesPrioritiesTable
 * @property {Attribute[]} attributes
 */

/**
 * Uses AHP (Analytic Hierarchy Process) to make a decision based on the data
 * provided and human input.
 * @param {(string | number)[][]} data 
 * @param {HumanInput} humanInput 
 * @returns {AhpResult} The best decision and the record with the steps to reach that decision
 */
function ahp(data: (string | number)[][], humanInput: HumanInput): AhpResult {  

  const serializedData = serializeData(data);  
  
  const ponderationInfo = ponderation(humanInput.attributesPrioritiesTable, humanInput.attributes.map(attr => attr.name), 'ponderacao');  

  const attributesInfo = getAttributesInfo(serializedData, humanInput.attributes);
  
  const decision = decide(attributesInfo, ponderationInfo, serializedData.serializedItems);
  
  return {
    decision: decision.bestDecision,
    records: [
      ponderationInfo.record,
      ...attributesInfo.map(info => info.record),
      decision.record,
    ],
  };
}

export default ahp;