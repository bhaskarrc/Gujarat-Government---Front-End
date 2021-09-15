import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardPhysicalBillComponent } from './inward-physical-bill.component';

describe('InwardPhysicalBillComponent', () => {
  let component: InwardPhysicalBillComponent;
  let fixture: ComponentFixture<InwardPhysicalBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardPhysicalBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardPhysicalBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
