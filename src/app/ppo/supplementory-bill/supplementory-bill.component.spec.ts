import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplementoryBillComponent } from './supplementory-bill.component';

describe('SupplementoryBillComponent', () => {
  let component: SupplementoryBillComponent;
  let fixture: ComponentFixture<SupplementoryBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplementoryBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplementoryBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
