import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorHeadMasterComponent } from './major-head-master.component';

describe('MajorHeadMasterComponent', () => {
  let component: MajorHeadMasterComponent;
  let fixture: ComponentFixture<MajorHeadMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorHeadMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorHeadMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
