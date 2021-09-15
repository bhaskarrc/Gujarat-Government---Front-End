import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampSeriesMasterStoListComponent } from './stamp-series-master-sto-list.component';

describe('StampSeriesMasterStoListComponent', () => {
  let component: StampSeriesMasterStoListComponent;
  let fixture: ComponentFixture<StampSeriesMasterStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampSeriesMasterStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampSeriesMasterStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
