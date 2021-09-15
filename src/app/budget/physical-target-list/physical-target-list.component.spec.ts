import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalTargetListComponent } from './physical-target-list.component';

describe('PhysicalTargetListComponent', () => {
  let component: PhysicalTargetListComponent;
  let fixture: ComponentFixture<PhysicalTargetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicalTargetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicalTargetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
