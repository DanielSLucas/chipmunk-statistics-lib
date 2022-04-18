export interface Attribute {
  name: string;
  betterWhen: 'greater' | 'lesser';
}

export interface Record {
  title: string;
  table: (string | number)[][];
  calcs: string[];
}

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

export interface PonderationResults {
  comparisonTable: number[][];
  sums: number[];
  priorities: number[];
  lambdaMax: number;
  consistency: number[];
  totalConsistency: number;
  ci: number;
  cr: number;
  isConsistent: boolean;
  record: Record;
}