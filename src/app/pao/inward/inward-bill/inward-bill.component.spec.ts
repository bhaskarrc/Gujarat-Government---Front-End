import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardBillComponent } from './inward-bill.component';

describe('InwardBillComponent', () => {
  let component: InwardBillComponent;
  let fixture: ComponentFixture<InwardBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
