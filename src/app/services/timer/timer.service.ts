import { Injectable } from '@angular/core';
import { IFlowCycle } from 'src/app/models/speaker.model';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  public currentFlowCycle = 0;
  public flowCycleTotalTimeSeconds = 180; // TODO: UI options

  // Current turn TODO: add user option
  public flowcycles: IFlowCycle[] = [
    { name: '4n', timeSeconds:0, cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Simo', timeSeconds: 0 , cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Seviah', timeSeconds: 0 , cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Spiritman', timeSeconds: 0 , cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Numbpapaya', timeSeconds: 0 , cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Intelligencer', timeSeconds: 0 , cycleNumber: 0 , totalTimeSeconds: 180},
  ];

  // Save all flow cycle data, move UI to next cycle
  nextFlowCycle() {
    // TODO: Add set of flowcycle time using UI options

    // TODO: Stop all timers

    // Get all users in current flowcycle and create new empty instances for next flowcycle

    let nextFlowCycleUsers: string[] = [];

    this.flowcycles.forEach((cycle) => {
      if (cycle.cycleNumber == this.currentFlowCycle) {
        nextFlowCycleUsers.push(cycle.name);
      }
    });

    this.currentFlowCycle++;
    // Create new cycles
    nextFlowCycleUsers.forEach((user) => {
      this.flowcycles.push({
        name: user,
        timeSeconds: 0,
        cycleNumber: this.currentFlowCycle,
        totalTimeSeconds: this.flowCycleTotalTimeSeconds,
      } as IFlowCycle);
    });

  }

  constructor() { }
}
