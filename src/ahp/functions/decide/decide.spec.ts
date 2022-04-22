import getAttributesInfo from "../getAttributesInfo/getAttributesInfo";
import ponderation from "../ponderation/ponderation";
import { SerializedData, Attribute } from "../types";
import decide from "./decide";

describe("Decide function", () => {
  it("Should return the best decision", () => {
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

    const comparisonTable = [      
      [1, 7],
      [0.14, 1],      
    ]
    
    const ponderationInfo = ponderation(
      comparisonTable, 
      ['custo', 'prazoDeEntrega'], 
      'ponderacao'
    ); 

    const attributesInfo = getAttributesInfo(serializeData,attributes);

    const result = decide(attributesInfo, ponderationInfo, serializeData.serializedItems);
  
    expect(result).toHaveProperty('bestDecision');
    expect(result).toHaveProperty('bestDecisionPriority');
    expect(result).toHaveProperty('record');
    expect(result.bestDecision).toEqual({
      name: "opt3",
      custo: 7,
      prazoDeEntrega: 5,
    });
    expect(result.bestDecisionPriority).toEqual(57.67);
  });
});