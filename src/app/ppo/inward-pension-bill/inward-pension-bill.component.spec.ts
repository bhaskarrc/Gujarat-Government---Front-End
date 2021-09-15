import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InwardPensionBillComponent } from './inward-pension-bill.component';

describe('InwardPensionBillComponent', () => {
  let component: InwardPensionBillComponent;
  let fixture: ComponentFixture<InwardPensionBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InwardPensionBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InwardPensionBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
