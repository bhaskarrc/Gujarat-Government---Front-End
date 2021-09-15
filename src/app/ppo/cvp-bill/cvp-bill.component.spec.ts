import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvpBillComponent } from './cvp-bill.component';

describe('CvpBillComponent', () => {
  let component: CvpBillComponent;
  let fixture: ComponentFixture<CvpBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvpBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvpBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
