import { IFlowCycle, ITimeOverViewDict } from './../../../models/speaker.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TimerService } from 'src/app/services/timer/timer.service';

@Component({
  selector: 'app-flowcycle-overview',
  templateUrl: './flowcycle-overview.component.html',
  styleUrls: ['./flowcycle-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowcycleOverviewComponent implements OnInit {
  // public _timerService: TimerService = new TimerService();
  public _timeOverViewDict = {} as ITimeOverViewDict;
  constructor(public _timerService: TimerService) {
    setInterval(() => {
      this.calculateTotalTime();
    }, 500);
  }

  message: string | undefined;
  ngOnInit(): void {}
  timerDetailEventHandler($event: any) {
    this.message = $event;
  }

  nextFlowCycle() {
    this._timerService.nextFlowCycle();
  }

  // // Save all flow cycle data, move UI to next cycle
  // nextFlowCycle() {
  //   // TODO: Add set of flowcycle time using UI options

  //   // TODO: Stop all timers

  //   let cycleNumber = this._timerService.currentFlowCycle;

  //   // Get all users in current flowcycle and create new empty instances for next flowcycle
  //   let flowcycles = this._timerService.flowcycles;
  //   let nextFlowCycleUsers: string[] = [];

  //   flowcycles.forEach((cycle) => {
  //     if (cycle.cycleNumber == cycleNumber) {
  //       nextFlowCycleUsers.push(cycle.name);
  //     }
  //   });

  //   cycleNumber++;

  //   // Create new cycles
  //   nextFlowCycleUsers.forEach((user) => {
  //     this._timerService.flowcycles.push({
  //       name: user,
  //       timeSeconds: 0,
  //       cycleNumber,
  //       totalTimeSeconds: this.flowCycleTotalTimeSeconds,
  //     } as IFlowCycle);
  //   });

  //   this._timerService.currentFlowCycle++;
  // }

  // TODO: optimize
  calculateTotalTime() {
    let flowcycles = this._timerService.flowcycles;
    let names: string[] = [];

    // Fill names list
    flowcycles.forEach(function (cycle) {
      if (names.lastIndexOf(cycle.name) === -1) {
        names.push(cycle.name);
      }
    });

    // Set names to dict, init at 0 seconds
    let timeOverViewDict = {} as ITimeOverViewDict;
    names.forEach((name) => {
      timeOverViewDict[name] = 0;
    });

    // console.log(flowcycles);

    flowcycles.forEach((cycle) => {
      timeOverViewDict[cycle.name] += cycle.timeSeconds;
    });

    this._timeOverViewDict = timeOverViewDict;
    return timeOverViewDict as ITimeOverViewDict;
  }
}
