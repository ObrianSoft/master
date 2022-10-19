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

  constructor( private _timerService: TimerService) {
    setInterval(() => {this.calculateTotalTime()}, 500);
  }

  message: string | undefined;
  ngOnInit(): void { }
  timerDetailEventHandler($event: any) {
    this.message = $event;
  }

  // Save all flow cycle data, move UI to next cycle
  nextFlowCycle() {}

  // TODO: optimize
  calculateTotalTime() {
    let flowcycles = this._timerService.flowcycles;
    let names: string[] = [];

    // Fill names list
    flowcycles.forEach(function (cycle) {
      if (names.lastIndexOf(cycle.name) === -1){
        names.push(cycle.name)
      };
    });

    // Set names to dict, init at 0 seconds
    let timeOverViewDict = {} as ITimeOverViewDict;
    names.forEach( (name) => {
      timeOverViewDict[name] = 0;
    });

    // console.log(flowcycles);

    flowcycles.forEach( (cycle) =>{
        timeOverViewDict[cycle.name] += cycle.timeSeconds;
      });

    this._timeOverViewDict = timeOverViewDict;
    return timeOverViewDict as ITimeOverViewDict
  }
}
