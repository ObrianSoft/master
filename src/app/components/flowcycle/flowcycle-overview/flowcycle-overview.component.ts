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
  public _timeOverViewDict = {} as ITimeOverViewDict;

  constructor(public _timerService: TimerService) {
    setInterval(() => {
      this.calculateTotalTime();
    }, 500); // TODO: optimize
    this._timerService.updateCurrentFlowCycleNumber()
  }

  message: string | undefined;
  ngOnInit(): void {}

  // Long flow cycle timerdetail event handler
  timerDetailEventHandler($event: any) {
    this.message = $event;
  }

  // TODO: add interface
  public speakingTimes: any = [
    {
      value: 60 * 10,
      label: '10 minutes',
    },
    {
      value: 60 * 5,
      label: '5 minutes',
    },
    {
      value: 60 * 3,
      label: '3 minutes',
    },
    {
      value: 60 * 1,
      label: '1 minute',
    },
    {
      value: 60 * 2,
      label: '2 minutes',
    },
    {
      value: 60 * 0.5,
      label: '30 seconds',
    },
  ];

  public selectedSpeakingTime: any;
  speakingTimeSelection($event: any) {
    this.selectedSpeakingTime = $event.value;
    this._timerService.flowCycleTotalTimeSeconds = this.selectedSpeakingTime;
  }

  // TODO: add interface
  public cycleTimes: any = [
    {
      value: 60 * 60 * 2.5,
      label: '2.5 hours',
    },
    {
      value: 60 * 60 * 2,
      label: '2 hours',
    },
    {
      value: 60 * 60 * 1.5,
      label: '1.5 hours',
    },
    {
      value: 60 * 60,
      label: '1 hour',
    },
    {
      value: 60 * 30,
      label: '0.5 hour',
    },
  ];
  public selectedCycleTime: any;
  public longFlowCycleTimerName: string = 'Long flow cycle';
  cycleTimeSelection($event: any) {
    this.selectedCycleTime = $event.value;
    this._timerService.longFlowCycleTotalTimeSeconds = this.selectedCycleTime;
    this._timerService.updateTimer(
      this.longFlowCycleTimerName,
      this.selectedCycleTime
    );
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

  public newPerson: string = '';
  addPerson(person: string) {
    this._timerService.addPerson(person);
  }
}
