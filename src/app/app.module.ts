import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForDemoComponent } from './for-demo/for-demo.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { TimerDemoComponent } from './timer-demo/timer-demo.component';
import {
  ComponentUpdateDemoComponent,
  PreSumPipe,
} from './component-update-demo/component-update-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ForDemoComponent,
    TimerDemoComponent,
    ComponentUpdateDemoComponent,
    PreSumPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
