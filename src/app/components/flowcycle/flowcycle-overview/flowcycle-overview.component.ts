import { ITimeOverViewDict } from './../../../models/speaker.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TimerService } from 'src/app/services/timer/timer.service';
import * as moment from 'moment';
import 'moment-duration-format';
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

  // Choice to not use humanize all the time due to weird behavior
  getOverViewTime(seconds: number) {
    let result = '';
    if (seconds < 60) {
      result = `${seconds} seconds`;
    } else if (seconds > 60 && seconds < 60 * 60) {
      result = `${Math.floor(seconds / 60)} minutes`;
    } else {
      result = moment.duration(seconds, 'seconds').humanize();
    }
    return result;
  }

  nextFlowCycle() {
    this._timerService.nextFlowCycle();
  }

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

    flowcycles.forEach((cycle) => {
      timeOverViewDict[cycle.name] += cycle.timeSeconds;
    });

    this._timeOverViewDict = timeOverViewDict;
    return timeOverViewDict as ITimeOverViewDict;
  }
}
