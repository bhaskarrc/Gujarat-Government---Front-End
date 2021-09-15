import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmsBillsComponent } from './hrms-bills.component';

describe('HrmsBillsComponent', () => {
  let component: HrmsBillsComponent;
  let fixture: ComponentFixture<HrmsBillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmsBillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmsBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
