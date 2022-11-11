import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingUnitComponent } from './training-unit.component';

describe('TrainingUnitComponent', () => {
  let component: TrainingUnitComponent;
  let fixture: ComponentFixture<TrainingUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
