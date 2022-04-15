import { PonderationResults } from "../ponderation/ponderation";
import { SerializedData } from "../serializeData/serializeData";
import getAttributesInfo, { Attribute } from "./getAttributesInfo";

describe("Get attributes info", () => {
  it("Should return the ponderation for each attribute in the items", () => {
    const serializeData: SerializedData = {
      attributesValues: {
        name: ["opt1", "opt2", "opt3"],
        custo: [10, 8, 7],
        prazoDeEntrega: [2, 4, 5],
      },
      serializedItems: [
        { 
          name: "opt1",
          custo: 10,
          prazoDeEntrega: 2,
        },
        {       
          name: "opt2",
          custo: 8,
          prazoDeEntrega: 4,
        },
        {       
          name: "opt3",
          custo: 7,
          prazoDeEntrega: 5,
        }
      ],
    }

    const attributes: Attribute[] = [
      {
        name: 'custo',
        betterWhen: 'lesser',
      },
      {
        name: 'prazoDeEntrega',
        betterWhen: 'lesser',
      },
    ];

    const result = getAttributesInfo(serializeData,attributes);
    
    expect(result).toBeInstanceOf(Array);
    expect(result[0]).toHaveProperty('name');
    expect(result[0]).toHaveProperty('betterWhen');
    expect(result[0]).toHaveProperty('sums');
    expect(result[0]).toHaveProperty('priorities');
    expect(result[0]).toHaveProperty('lambdaMax');
    expect(result[0]).toHaveProperty('consistency');
    expect(result[0]).toHaveProperty('totalConsistency');
    expect(result[0]).toHaveProperty('ci');
    expect(result[0]).toHaveProperty('cr');
    expect(result[0]).toHaveProperty('isConsistent');
    expect(result[0]).toHaveProperty('record');
  });
});