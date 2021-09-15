import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTrsyChallanDetailPostingComponent } from './sub-trsy-challan-detail-posting.component';

describe('SubTrsyChallanDetailPostingComponent', () => {
  let component: SubTrsyChallanDetailPostingComponent;
  let fixture: ComponentFixture<SubTrsyChallanDetailPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTrsyChallanDetailPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTrsyChallanDetailPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
