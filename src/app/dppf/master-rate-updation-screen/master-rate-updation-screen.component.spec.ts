import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRateUpdationScreenComponent } from './master-rate-updation-screen.component';

describe('MasterRateUpdationScreenComponent', () => {
  let component: MasterRateUpdationScreenComponent;
  let fixture: ComponentFixture<MasterRateUpdationScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRateUpdationScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRateUpdationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
