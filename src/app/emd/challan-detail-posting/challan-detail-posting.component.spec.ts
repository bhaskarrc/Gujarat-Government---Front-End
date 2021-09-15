import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanDetailPostingComponent } from './challan-detail-posting.component';

describe('ChallanDetailPostingComponent', () => {
  let component: ChallanDetailPostingComponent;
  let fixture: ComponentFixture<ChallanDetailPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanDetailPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanDetailPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
