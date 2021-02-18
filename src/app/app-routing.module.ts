import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForDemoComponent } from './for-demo/for-demo.component';

const routes: Routes = [
  {
    path: 'for-demo',
    component: ForDemoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
