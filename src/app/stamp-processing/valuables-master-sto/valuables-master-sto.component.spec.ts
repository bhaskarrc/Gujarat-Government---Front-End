import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuablesMasterStoComponent } from './valuables-master-sto.component';

describe('ValuablesMasterStoComponent', () => {
  let component: ValuablesMasterStoComponent;
  let fixture: ComponentFixture<ValuablesMasterStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuablesMasterStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuablesMasterStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
