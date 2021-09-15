import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampSeriesMasterStoComponent } from './stamp-series-master-sto.component';

describe('StampSeriesMasterStoComponent', () => {
  let component: StampSeriesMasterStoComponent;
  let fixture: ComponentFixture<StampSeriesMasterStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampSeriesMasterStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampSeriesMasterStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
