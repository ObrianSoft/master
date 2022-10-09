import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerDetailComponent } from '../../components/timer/timer-detail/timer-detail.component';
import { TimerOverviewComponent } from '../../components/timer/timer-overview/timer-overview.component';



@NgModule({
  declarations: [
    TimerDetailComponent,
    TimerOverviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TimerModule { }
