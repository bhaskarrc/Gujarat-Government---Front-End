import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdMasterListComponent } from './emd-master-list.component';

describe('EmdMasterListComponent', () => {
  let component: EmdMasterListComponent;
  let fixture: ComponentFixture<EmdMasterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdMasterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdMasterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
