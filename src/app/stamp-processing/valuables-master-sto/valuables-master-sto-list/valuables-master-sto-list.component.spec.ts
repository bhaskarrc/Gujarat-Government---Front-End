import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuablesMasterStoListComponent } from './valuables-master-sto-list.component';

describe('ValuablesMasterStoListComponent', () => {
  let component: ValuablesMasterStoListComponent;
  let fixture: ComponentFixture<ValuablesMasterStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuablesMasterStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuablesMasterStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
