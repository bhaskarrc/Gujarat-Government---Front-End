import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdMasterViewComponent } from './emd-master-view.component';

describe('EmdMasterViewComponent', () => {
  let component: EmdMasterViewComponent;
  let fixture: ComponentFixture<EmdMasterViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdMasterViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
