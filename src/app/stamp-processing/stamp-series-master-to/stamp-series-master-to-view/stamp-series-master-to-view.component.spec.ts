import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampSeriesMasterToViewComponent } from './stamp-series-master-to-view.component';

describe('StampSeriesMasterToViewComponent', () => {
  let component: StampSeriesMasterToViewComponent;
  let fixture: ComponentFixture<StampSeriesMasterToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampSeriesMasterToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampSeriesMasterToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
