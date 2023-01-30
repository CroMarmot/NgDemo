import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentUpdateDemoComponent } from './component-update-demo/component-update-demo.component';
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
  {
    path: 'component-update-demo',
    component: ComponentUpdateDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
