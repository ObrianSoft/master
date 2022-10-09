import { TimerDetailComponent } from './components/timer/timer-detail/timer-detail.component';
import { TimerOverviewComponent } from './components/timer/timer-overview/timer-overview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path: <base-path>, component: <component>, outlet: <target_outlet_name>}
  {path: '', component: TimerDetailComponent},
  {path: 'timer', component: TimerOverviewComponent},
  {path: 'timer/detail', component: TimerOverviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
