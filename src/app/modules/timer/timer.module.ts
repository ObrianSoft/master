import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerDetailComponent } from '../../components/timer/timer-detail/timer-detail.component';
import { TimerOverviewComponent } from '../../components/timer/timer-overview/timer-overview.component';
import { CdTimerModule } from 'angular-cd-timer';

@NgModule({
  declarations: [TimerDetailComponent, TimerOverviewComponent],
  imports: [CommonModule, CdTimerModule, SharedModule],
  exports: [TimerDetailComponent, TimerOverviewComponent],
})
export class TimerModule {}
