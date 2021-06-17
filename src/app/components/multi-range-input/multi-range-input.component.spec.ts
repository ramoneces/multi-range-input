import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiRangeInputComponent } from './multi-range-input.component';

describe('MultiRangeInputComponent', () => {
  let component: MultiRangeInputComponent;
  let fixture: ComponentFixture<MultiRangeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiRangeInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiRangeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
