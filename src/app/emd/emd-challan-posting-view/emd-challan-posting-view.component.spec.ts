import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmdChallanPostingViewComponent } from './emd-challan-posting-view.component';

describe('EmdChallanPostingViewComponent', () => {
  let component: EmdChallanPostingViewComponent;
  let fixture: ComponentFixture<EmdChallanPostingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmdChallanPostingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmdChallanPostingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
