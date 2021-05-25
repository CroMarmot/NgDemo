import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-timer-demo',
  templateUrl: './timer-demo.component.html',
  styleUrls: ['./timer-demo.component.scss'],
})
export class TimerDemoComponent {
  count = 0;
  private sub$ = null;

  StartTimerClick(): void {
    if (this.sub$) {
      this.sub$.unsubscribe();
    }
    this.sub$ = timer(0, 100).subscribe((val) => (this.count = val * 100));
  }

  printX(): void {
    console.log(this.count);
  }
}
