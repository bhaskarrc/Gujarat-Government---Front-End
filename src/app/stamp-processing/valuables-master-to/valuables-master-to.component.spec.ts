import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuablesMasterToComponent } from './valuables-master-to.component';

describe('ValuablesMasterToComponent', () => {
  let component: ValuablesMasterToComponent;
  let fixture: ComponentFixture<ValuablesMasterToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuablesMasterToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuablesMasterToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
