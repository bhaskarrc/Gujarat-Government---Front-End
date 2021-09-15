import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalTargetComponent } from './physical-target.component';

describe('PhysicalTargetComponent', () => {
  let component: PhysicalTargetComponent;
  let fixture: ComponentFixture<PhysicalTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
