import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuablesMasterToListComponent } from './valuables-master-to-list.component';

describe('ValuablesMasterToListComponent', () => {
  let component: ValuablesMasterToListComponent;
  let fixture: ComponentFixture<ValuablesMasterToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuablesMasterToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuablesMasterToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
