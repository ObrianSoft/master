import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-timer-overview',
  templateUrl: './timer-overview.component.html',
  styleUrls: ['./timer-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
