import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanPostingViewComponent } from './challan-posting-view.component';

describe('ChallanPostingViewComponent', () => {
  let component: ChallanPostingViewComponent;
  let fixture: ComponentFixture<ChallanPostingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanPostingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanPostingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
