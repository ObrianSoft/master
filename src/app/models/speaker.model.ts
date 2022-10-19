
export interface IFlowCycle{
  name: string;
  timeSeconds: number;
  cycleNumber: number;
  totalTimeSeconds: number;
}

// Seconds per person
export interface ITimeOverViewDict{
  [key: string]: number
}
