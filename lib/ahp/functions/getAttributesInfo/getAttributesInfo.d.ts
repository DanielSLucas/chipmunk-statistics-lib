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
 * @returns {(Attribute & PonderationResults)[]} An array with the ponderation info for each attribute informed.
 */
declare function getAttributesInfo(data: SerializedData, attributes: Attribute[]): (Attribute & PonderationResults)[];
export default getAttributesInfo;
