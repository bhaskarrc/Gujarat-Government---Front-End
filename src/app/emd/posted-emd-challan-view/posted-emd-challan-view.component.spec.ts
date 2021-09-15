import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedEmdChallanViewComponent } from './posted-emd-challan-view.component';

describe('PostedEmdChallanViewComponent', () => {
  let component: PostedEmdChallanViewComponent;
  let fixture: ComponentFixture<PostedEmdChallanViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedEmdChallanViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedEmdChallanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
