import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillFroMlaComponent } from './bill-fro-mla.component';

describe('BillFroMlaComponent', () => {
  let component: BillFroMlaComponent;
  let fixture: ComponentFixture<BillFroMlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillFroMlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillFroMlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
