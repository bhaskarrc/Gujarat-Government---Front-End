import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAuditorNameMajorHeadComponent } from './update-auditor-name-major-head.component';

describe('UpdateAuditorNameMajorHeadComponent', () => {
  let component: UpdateAuditorNameMajorHeadComponent;
  let fixture: ComponentFixture<UpdateAuditorNameMajorHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAuditorNameMajorHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAuditorNameMajorHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
