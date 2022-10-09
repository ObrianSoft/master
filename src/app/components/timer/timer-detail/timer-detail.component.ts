import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-timer-detail',
  templateUrl: './timer-detail.component.html',
  styleUrls: ['./timer-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimerDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
