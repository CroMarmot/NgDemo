import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { TimerDemoComponent } from './timer-demo/timer-demo.component';

const routes: Routes = [
  {
    path: 'for-demo',
    component: ForDemoComponent,
  },
  {
    path: 'timer-demo',
    component: TimerDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
