import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
})
export class BoxComponent implements OnInit, AfterViewInit {
  @Input() public x: number;
  @Input() public y: number;
  @Input() public num: number;
  @Input() public selected: boolean;

  @ViewChild('div')
  set div(value: ElementRef) {
    if (value) {
      value.nativeElement[BoxComponent.name] = this;
    }
  }

  color: string;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.color = `rgba(${this.getRandValue()},${this.getRandValue()},${this.getRandValue()}, 0.5)`;
  }

  ngAfterViewInit(): void {
    this.cdr.detach();
  }

  getRandValue(): number {
    return Math.floor(Math.random() * 255 + 1);
  }

  update(): void {
    this.cdr.detectChanges();
  }
}
