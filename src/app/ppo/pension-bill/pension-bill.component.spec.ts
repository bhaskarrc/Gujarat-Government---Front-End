import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionBillComponent } from './pension-bill.component';

describe('PensionBillComponent', () => {
  let component: PensionBillComponent;
  let fixture: ComponentFixture<PensionBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PensionBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PensionBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
