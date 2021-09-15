import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuablesMasterToViewComponent } from './valuables-master-to-view.component';

describe('ValuablesMasterToViewComponent', () => {
  let component: ValuablesMasterToViewComponent;
  let fixture: ComponentFixture<ValuablesMasterToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuablesMasterToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuablesMasterToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
