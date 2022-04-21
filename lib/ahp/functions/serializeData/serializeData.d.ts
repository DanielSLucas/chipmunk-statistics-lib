import { SerializedData } from "../types";
/**
 * Object containing the serialized data from a table.
 * @typedef {Object} SerializedData
 * @property {Object} attributesValues - Contains an array of values for each attribute of the original table.
 * @property {Object[]} serializedItems - An array containing table rows serialized as an object.
 */
/**
 * Serializes data from a array (table), returning an object with all the values
 * for each attribute and each row serialized as an object.
 * @param {any[][]} data - Array containing the table data to be serialized.
 * @returns {SerializedData} Object containing the serialized data from a table.
 */
declare function serializeData(data: (string | number)[][]): SerializedData;
export default serializeData;
