import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardBillDialougeComponent } from './inward-bill-dialouge.component';

describe('InwardBillDialougeComponent', () => {
  let component: InwardBillDialougeComponent;
  let fixture: ComponentFixture<InwardBillDialougeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardBillDialougeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardBillDialougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
