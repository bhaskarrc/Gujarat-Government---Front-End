import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampSeriesMasterToListComponent } from './stamp-series-master-to-list.component';

describe('StampSeriesMasterToListComponent', () => {
  let component: StampSeriesMasterToListComponent;
  let fixture: ComponentFixture<StampSeriesMasterToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampSeriesMasterToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampSeriesMasterToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
