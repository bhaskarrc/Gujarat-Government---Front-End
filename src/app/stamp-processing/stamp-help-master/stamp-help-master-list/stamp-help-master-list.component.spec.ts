import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampHelpMasterListComponent } from './stamp-help-master-list.component';

describe('StampHelpMasterListComponent', () => {
  let component: StampHelpMasterListComponent;
  let fixture: ComponentFixture<StampHelpMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampHelpMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampHelpMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
