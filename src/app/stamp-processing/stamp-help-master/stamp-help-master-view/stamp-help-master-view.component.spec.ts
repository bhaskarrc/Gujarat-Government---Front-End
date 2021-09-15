import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampHelpMasterViewComponent } from './stamp-help-master-view.component';

describe('StampHelpMasterViewComponent', () => {
  let component: StampHelpMasterViewComponent;
  let fixture: ComponentFixture<StampHelpMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampHelpMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampHelpMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
