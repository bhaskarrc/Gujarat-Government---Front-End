import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampSeriesMasterToComponent } from './stamp-series-master-to.component';

describe('StampSeriesMasterToComponent', () => {
  let component: StampSeriesMasterToComponent;
  let fixture: ComponentFixture<StampSeriesMasterToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampSeriesMasterToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampSeriesMasterToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
