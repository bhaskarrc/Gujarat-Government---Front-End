import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedEmdChallanUpdateComponent } from './posted-emd-challan-update.component';

describe('PostedEmdChallanUpdateComponent', () => {
  let component: PostedEmdChallanUpdateComponent;
  let fixture: ComponentFixture<PostedEmdChallanUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedEmdChallanUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedEmdChallanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
