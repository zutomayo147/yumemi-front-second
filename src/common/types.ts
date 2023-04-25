export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type PopulationByYear = {
  year: number;
  [prefecture: string]: number;
};

export type PopulationData = {
  year: number;
  value: number;
};
