import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponentUpdateDemoComponent } from './component-update-demo/component-update-demo.component';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TimerDemoComponent } from './timer-demo/timer-demo.component';
import { PerfModule } from './perf/perf.module';
import { MainPageComponent } from './main-page/main-page.component';

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
  {
    path: 'perf',
    loadChildren: () => PerfModule,
    data: { preload: true },
  },
  {
    path: '',
    component: MainPageComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
