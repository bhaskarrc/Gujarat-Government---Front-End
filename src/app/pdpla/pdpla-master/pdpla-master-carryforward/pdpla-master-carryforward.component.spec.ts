import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdplaMasterCarryforwardComponent } from './pdpla-master-carryforward.component';

describe('PdplaMasterCarryforwardComponent', () => {
  let component: PdplaMasterCarryforwardComponent;
  let fixture: ComponentFixture<PdplaMasterCarryforwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdplaMasterCarryforwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdplaMasterCarryforwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
