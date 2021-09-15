import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectionMasterComponent } from './objection-master.component';

describe('ObjectionMasterComponent', () => {
  let component: ObjectionMasterComponent;
  let fixture: ComponentFixture<ObjectionMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectionMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectionMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
