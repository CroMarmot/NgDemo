import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import {
  ComponentUpdateDemoComponent,
  PreSumPipe,
} from './component-update-demo.component';

describe('ComponentUpdateDemoComponent', () => {
  let component: ComponentUpdateDemoComponent;
  let fixture: ComponentFixture<ComponentUpdateDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ComponentUpdateDemoComponent, PreSumPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentUpdateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow us to set a bound input field', () => {
    const hostElement = fixture.debugElement.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('#ipt');
    nameInput.value = 'x';
    expect(component.inputValue).toEqual('');
    nameInput.dispatchEvent(new Event('input'));
    expect(component.inputValue).toEqual('x');
    fixture.detectChanges();
    nameInput.value = 'xy';
    nameInput.dispatchEvent(new Event('input'));
    expect(component.inputValue).toEqual('xy');
  });
});
