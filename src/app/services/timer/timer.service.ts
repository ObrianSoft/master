import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { IFlowCycle } from 'src/app/models/speaker.model';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  private subject: Subject<any> = new Subject<any>();
  public currentFlowCycle = 0;
  public flowCycleTotalTimeSeconds = 180;
  public longFlowCycleTotalTimeSeconds = 60 * 60;

  // Current turn TODO: add user option
  public flowcycles: IFlowCycle[] = [
    { name: '4n', timeSeconds: 0, cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Simo', timeSeconds: 0, cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Seviah', timeSeconds: 0, cycleNumber: 0, totalTimeSeconds: 180 },
    {
      name: 'Spiritman',
      timeSeconds: 0,
      cycleNumber: 0,
      totalTimeSeconds: 180,
    },
    {
      name: 'Numbpapaya',
      timeSeconds: 0,
      cycleNumber: 0,
      totalTimeSeconds: 180,
    },
    {
      name: 'Intelligencer',
      timeSeconds: 0,
      cycleNumber: 0,
      totalTimeSeconds: 180,
    },
    { name: 'Extra 1', timeSeconds: 0, cycleNumber: 0, totalTimeSeconds: 180 },
    { name: 'Extra 2', timeSeconds: 0, cycleNumber: 0, totalTimeSeconds: 180 },
  ];

  constructor() {}
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

    this.flowcycles.forEach((cycle) => {
      if (cycle.cycleNumber == this.currentFlowCycle) {
        this.updateTimer(cycle.name, cycle.totalTimeSeconds);
      }
    });
  }

  // Timer to send update to observers
  public updateTimer(name: string, startTime: number) {
    this.subject.next({ name, startTime });
  }

  public timerObservable(): Observable<{ name: string; startTime: number }> {
    return this.subject.asObservable();
  }

  deletePerson(speakerName: string) {
    console.log(this.flowcycles);

    this.flowcycles.forEach((cycle, index) => {
      if (cycle.cycleNumber == this.currentFlowCycle && cycle.name == speakerName) {
        this.flowcycles.splice(index,1);
        console.log('deleted');
        this.updateTimer(cycle.name,cycle.totalTimeSeconds);
      }
    });
  }
}
