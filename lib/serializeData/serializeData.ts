export interface AttributesValues {
  [key: string]: (number | string)[];
}

export interface SerializedItem {
  [key: string]: number | string;
}

export interface SerializedData {
  attributesValues: AttributesValues;
  serializedItems: SerializedItem[];
}

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
function serializeData(data: (string | number)[][]): SerializedData {
  const dataCopy = Array.from(data);

  const params = data[0] as string[];

  dataCopy.shift();

  const attributesValues: AttributesValues = {};

  const serializedItems = dataCopy.map(row => {
    const item: SerializedItem = {};
    
    params.forEach((param, i) => {
      const key = param ? param : 'name';
      const value = Number.isNaN(Number(row[i])) ? row[i] : Number(row[i]);


      if (!attributesValues[key]) {
        attributesValues[key] = [value];
      } else {
        attributesValues[key].push(value);
      }
      

      item[key] = value;
    });

    return item;
  });

  return {
    attributesValues,
    serializedItems
  };
}

export default serializeData;