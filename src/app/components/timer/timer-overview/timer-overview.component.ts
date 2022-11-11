import { TimerService } from './../../../services/timer/timer.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-timer-overview',
  templateUrl: './timer-overview.component.html',
  styleUrls: ['./timer-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class TimerOverviewComponent implements OnInit {
  constructor(public _timerService: TimerService) {}

  message: string | undefined;
  ngOnInit(): void {}
  timerDetailEventHandler($event: any) {
    this.message = $event;
  }
}
