import { NgModule } from '@angular/core';

import { PerfComponent } from './perf.component';
import { BoxComponent } from './box/box.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PerfComponent,
  },
];

@NgModule({
  declarations: [PerfComponent, BoxComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [RouterModule],
})
export class PerfModule {}
