import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementaryBillPensionComponent } from './supplementary-bill-pension.component';

describe('SupplementaryBillPensionComponent', () => {
  let component: SupplementaryBillPensionComponent;
  let fixture: ComponentFixture<SupplementaryBillPensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementaryBillPensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementaryBillPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
