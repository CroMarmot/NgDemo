import {
  Component,
  ChangeDetectorRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import { BoxComponent } from './box/box.component';

@Component({
  selector: 'app-perf-page',
  templateUrl: './perf.component.html',
  styleUrls: ['./perf.component.css'],
})
export class PerfComponent implements OnInit, AfterViewInit {
  currentBox: BoxComponent = null;
  offsetY: number;
  offsetX: number;
  boxes = [];
  size = 10000;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    for (let i = 0; i < this.size; i++) {
      const randX = Math.floor(Math.random() * 1000 + 1);
      const randY = Math.floor(Math.random() * 1000 + 1);
      this.boxes[i] = { x: randX, y: randY, num: i };
    }
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }

  onMouseMove(event): void {
    event.preventDefault();
    if (this.currentBox !== null) {
      this.updateBox(
        this.currentBox,
        event.clientX + this.offsetX,
        event.clientY + this.offsetY
      );
    }
  }

  onMouseUp(event): void {
    if (this.currentBox) {
      this.currentBox.selected = false;
      this.currentBox.update();
    }
    this.currentBox = null;
  }

  onMouseDown(event): void {
    const box = event.target[BoxComponent.name] as BoxComponent;

    this.offsetX = box.x - event.clientX;
    this.offsetY = box.y - event.clientY;

    this.currentBox = box;

    box.selected = true;
    box.update();
  }

  updateBox(box: BoxComponent, x: number, y: number): void {
    box.x = x;
    box.y = y;
    box.update();
  }
}
