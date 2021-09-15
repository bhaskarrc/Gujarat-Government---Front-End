import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalTargetDetailsComponent } from './physical-target-details.component';

describe('PhysicalTargetDetailsComponent', () => {
  let component: PhysicalTargetDetailsComponent;
  let fixture: ComponentFixture<PhysicalTargetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalTargetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalTargetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
