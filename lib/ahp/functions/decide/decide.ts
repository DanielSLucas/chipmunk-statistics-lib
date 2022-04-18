import { createTable, getFinalPriorities } from "../index";
import { PonderationResults, Record, SerializedItem } from '../types';

interface DecisionResult {
  bestDecision: SerializedItem;
  record: Record;
}

/**
 * Object with all the properties returned from the decide function.
 * @typedef {Object} DecisionResult
 * @property {Object} bestDecision - The object containing the data of the best decision
 * @property {Object} record - The record of what was made in this function.
 */

/**
 * Decides, based on the inputs, which option is the best.
 * @param {PonderationResults[]} attributesInfo - The ponderation info for each attribute.
 * @param {PonderationResults} ponderationInfo - The ponderation info for the human input.
 * @param {SerializedData["serializedItems"]} serializedItems - The list of the options serialized as an object.
 * @returns {DecisionResult}
 */
function decide(attributesInfo: PonderationResults[], ponderationInfo: PonderationResults, serializedItems: SerializedItem[]): DecisionResult {
  const attributesPriorities = attributesInfo.map( item => item.priorities);
  const { priorities: ponderationPriorities } = ponderationInfo;

  const { finalPriorities, calc: finalPrioritiesCalc } = getFinalPriorities(attributesPriorities, ponderationPriorities);

  const decisionIndex = finalPriorities.indexOf(Math.max(...finalPriorities));

  const columnLabels = Object.keys(serializedItems[0]);
  const identifierKey = columnLabels.shift() as string;
  const rowLabels = serializedItems.map(item => item[identifierKey]) as string[];

  const table = createTable(
    attributesPriorities,
    {
      column: ['', ...columnLabels, 'Total'],
      row: rowLabels,
    },
    finalPriorities,
    ['P', ...ponderationPriorities, '']
  );

  const record: Record = {
    title: 'Decisão',
    table,
    calcs: [
      finalPrioritiesCalc,
    ],
  };  

  return {
    bestDecision: serializedItems[decisionIndex],
    record,
  };
}

export default decide;