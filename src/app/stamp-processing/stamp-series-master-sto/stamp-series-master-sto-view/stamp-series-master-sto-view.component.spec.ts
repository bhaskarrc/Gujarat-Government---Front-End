import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampSeriesMasterStoViewComponent } from './stamp-series-master-sto-view.component';

describe('StampSeriesMasterStoViewComponent', () => {
  let component: StampSeriesMasterStoViewComponent;
  let fixture: ComponentFixture<StampSeriesMasterStoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampSeriesMasterStoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampSeriesMasterStoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
