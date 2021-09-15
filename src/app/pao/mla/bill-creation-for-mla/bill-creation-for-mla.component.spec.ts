import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCreationForMlaComponent } from './bill-creation-for-mla.component';

describe('BillCreationForMlaComponent', () => {
  let component: BillCreationForMlaComponent;
  let fixture: ComponentFixture<BillCreationForMlaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillCreationForMlaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillCreationForMlaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
