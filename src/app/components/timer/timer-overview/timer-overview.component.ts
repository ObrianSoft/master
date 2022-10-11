import { TimerService } from './../../../services/timer/timer.service';
import { Speaker } from './../../../models/speaker.model';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-timer-overview',
  templateUrl: './timer-overview.component.html',
  styleUrls: ['./timer-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimerOverviewComponent implements OnInit {
  public _timerService : TimerService = new TimerService;

  constructor() {
  }

  message:string | undefined;
  ngOnInit(): void {}
  receiveMessage($event: any) {
    this.message = $event
  }

}
