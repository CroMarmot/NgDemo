import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-demo',
  templateUrl: './for-demo.component.html',
  styleUrls: ['./for-demo.component.scss'],
})
export class ForDemoComponent implements OnInit {
  name = '';
  newId = 3;
  list = [
    { id: 1, name: '李斯' },
    { id: 2, name: '吕不韦' },
    { id: 3, name: '嬴政' },
  ];

  constructor() {}

  ngOnInit(): void {}

  add(): void {
    // 注意这里是unshift
    this.list.unshift({
      id: ++this.newId,
      name: this.name,
    });
    this.name = '';
  }
}
