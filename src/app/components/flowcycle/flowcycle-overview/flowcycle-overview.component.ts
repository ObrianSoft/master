import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-flowcycle-overview',
  templateUrl: './flowcycle-overview.component.html',
  styleUrls: ['./flowcycle-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlowcycleOverviewComponent implements OnInit {
  constructor() {}

  message: string | undefined;
  ngOnInit(): void {}
  receiveMessage($event: any) {
    this.message = $event;
  }
}
