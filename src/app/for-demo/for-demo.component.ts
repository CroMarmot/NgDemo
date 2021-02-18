import { Component } from '@angular/core';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrls: ['./for-demo.component.scss'],
})
export class ForDemoComponent {
  name = '';
  newId = 3;
  list = [
    { id: 1, name: 'Name0' },
    { id: 2, name: 'Name1' },
    { id: 3, name: 'Name2' },
  ];

  add(): void {
    this.list.unshift({
      id: ++this.newId,
      name: this.name,
    });
    this.name = '';
  }
}
