"use strict";
exports.__esModule = true;
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
function serializeData(data) {
    var dataCopy = Array.from(data);
    var params = data[0];
    dataCopy.shift();
    var attributesValues = {};
    var serializedItems = dataCopy.map(function (row) {
        var item = {};
        params.forEach(function (param, i) {
            var key = param ? param : 'name';
            var value = Number.isNaN(Number(row[i])) ? row[i] : Number(row[i]);
            if (!attributesValues[key]) {
                attributesValues[key] = [value];
            }
            else {
                attributesValues[key].push(value);
            }
            item[key] = value;
        });
        return item;
    });
    return {
        attributesValues: attributesValues,
        serializedItems: serializedItems
    };
}
exports["default"] = serializeData;
