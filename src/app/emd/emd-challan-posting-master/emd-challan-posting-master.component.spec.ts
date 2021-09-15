import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdChallanPostingMasterComponent } from './emd-challan-posting-master.component';

describe('EmdChallanPostingMasterComponent', () => {
  let component: EmdChallanPostingMasterComponent;
  let fixture: ComponentFixture<EmdChallanPostingMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdChallanPostingMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdChallanPostingMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
