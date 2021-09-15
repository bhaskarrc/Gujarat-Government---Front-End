import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillTypeWiseStructureComponent } from './bill-type-wise-structure.component';

describe('BillTypeWiseStructureComponent', () => {
  let component: BillTypeWiseStructureComponent;
  let fixture: ComponentFixture<BillTypeWiseStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillTypeWiseStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillTypeWiseStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
