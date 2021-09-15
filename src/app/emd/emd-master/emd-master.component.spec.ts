import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdMasterComponent } from './emd-master.component';

describe('EmdMasterComponent', () => {
  let component: EmdMasterComponent;
  let fixture: ComponentFixture<EmdMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
