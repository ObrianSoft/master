import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { CdTimerComponent, TimeInterface } from 'angular-cd-timer';

@Component({
  selector: 'app-timer-detail',
  templateUrl: './timer-detail.component.html',
  styleUrls: ['./timer-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerDetailComponent implements OnInit {
  @ViewChild('timer', { static: true })
  timer!: CdTimerComponent;

  timerMins = 3;
  startTime: number = this.timerMins * 60;
  endTime: number = 0;

  constructor() {}

  ngOnInit(): void {}

  // Events
  OnStart(component: CdTimerComponent) {}
  OnTick(timeInterface: TimeInterface) {}
  OnStop(component: CdTimerComponent) {}
  OnComplete(component: CdTimerComponent) {}

  // Methods
  start(): void {
    this.timer?.start();
  }

  stop(): void {
    this.timer?.stop();
  }

  resume(): void {
    this.timer?.resume();
  }

  reset(): void {
    this.timer?.reset();
  }
}
