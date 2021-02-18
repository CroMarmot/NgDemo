import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForDemoComponent } from './for-demo.component';
import { FormsModule } from '@angular/forms';

describe('ForDemoComponent', () => {
  let component: ForDemoComponent;
  let fixture: ComponentFixture<ForDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ForDemoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
