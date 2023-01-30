import { Component, Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({ name: 'preSumPipe' })
export class PreSumPipe implements PipeTransform {
  transform(v: number): number {
    let s = 0;
    for (let i = 0; i <= 100; i++) {
      s += i;
    }
    console.log('pipe', s);
    return s;
  }
}

@Component({
  selector: 'app-component-update-demo',
  templateUrl: './component-update-demo.component.html',
  styleUrls: ['./component-update-demo.component.scss'],
})
export class ComponentUpdateDemoComponent {
  inputValue = '';

  otherValue = new BehaviorSubject(100);

  calc1$ = this.otherValue.pipe(
    map((v) => {
      let s = 0;
      for (let i = 0; i <= v; i++) {
        s += i;
      }
      console.log('calc1', s);
      return s;
    })
  );

  calc0(): number {
    const v = this.otherValue.getValue();
    let s = 0;
    for (let i = 0; i <= v; i++) {
      s += i;
    }
    console.log('calc0', s);
    return s;
  }
}
