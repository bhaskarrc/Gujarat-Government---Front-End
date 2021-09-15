import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRateUpdationComponent } from './master-rate-updation.component';

describe('MasterRateUpdationComponent', () => {
  let component: MasterRateUpdationComponent;
  let fixture: ComponentFixture<MasterRateUpdationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRateUpdationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRateUpdationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
