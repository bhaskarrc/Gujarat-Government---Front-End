import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhocMasterComponent } from './adhoc-master.component';

describe('AdhocMasterComponent', () => {
  let component: AdhocMasterComponent;
  let fixture: ComponentFixture<AdhocMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhocMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhocMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
