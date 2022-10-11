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
  constructor() {}
  @Input() speakers?: Speaker[] = [
    { name: '4n', timeSeconds: 3 * 60 },
    { name: 'Simo', timeSeconds: 3 * 60 },
    { name: 'Seviah', timeSeconds: 3 * 60 },
    { name: 'Spiritman', timeSeconds: 3 * 60 },
    { name: 'Numbpapaya', timeSeconds: 3 * 60 },
    { name: 'Intelligencer', timeSeconds: 3 * 60 },
  ];

  message:string | undefined;
  ngOnInit(): void {}
  receiveMessage($event: any) {
    this.message = $event
  }

}
