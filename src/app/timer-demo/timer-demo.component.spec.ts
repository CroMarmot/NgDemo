import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerDemoComponent } from './timer-demo.component';

describe('TimerDemoComponent', () => {
  let component: TimerDemoComponent;
  let fixture: ComponentFixture<TimerDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimerDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
