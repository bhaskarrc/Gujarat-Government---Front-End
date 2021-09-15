import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuablesMasterStoViewComponent } from './valuables-master-sto-view.component';

describe('ValuablesMasterStoViewComponent', () => {
  let component: ValuablesMasterStoViewComponent;
  let fixture: ComponentFixture<ValuablesMasterStoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuablesMasterStoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuablesMasterStoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
