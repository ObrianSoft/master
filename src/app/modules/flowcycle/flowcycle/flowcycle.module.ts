import { TimerModule } from './../../timer/timer.module';
import { FlowcycleOverviewComponent } from './../../../components/flowcycle/flowcycle-overview/flowcycle-overview.component';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FlowcycleOverviewComponent],
  imports: [CommonModule, SharedModule, TimerModule],
  exports: [FlowcycleOverviewComponent],
})
export class FlowcycleModule {}
