import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiResolutionMasterComponent } from './gi-resolution-master.component';

describe('GiResolutionMasterComponent', () => {
  let component: GiResolutionMasterComponent;
  let fixture: ComponentFixture<GiResolutionMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiResolutionMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiResolutionMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
