import { PonderationResults, Record, SerializedItem } from '../types';
interface DecisionResult {
    bestDecision: SerializedItem;
    bestDecisionPriority: number;
    record: Record;
}
/**
 * Object with all the properties returned from the decide function.
 * @typedef {Object} DecisionResult
 * @property {Object} bestDecision - The object containing the data of the best decision
 * @property {number} bestDecisionPriority - The percentage of priority
 * @property {Object} record - The record of what was made in this function.
 */
/**
 * Decides, based on the inputs, which option is the best.
 * @param {PonderationResults[]} attributesInfo - The ponderation info for each attribute.
 * @param {PonderationResults} ponderationInfo - The ponderation info for the human input.
 * @param {SerializedData["serializedItems"]} serializedItems - The list of the options serialized as an object.
 * @returns {DecisionResult}
 */
declare function decide(attributesInfo: PonderationResults[], ponderationInfo: PonderationResults, serializedItems: SerializedItem[]): DecisionResult;
export default decide;
