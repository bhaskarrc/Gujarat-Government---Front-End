import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampHelpMasterComponent } from './stamp-help-master.component';

describe('StampHelpMasterComponent', () => {
  let component: StampHelpMasterComponent;
  let fixture: ComponentFixture<StampHelpMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampHelpMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampHelpMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
