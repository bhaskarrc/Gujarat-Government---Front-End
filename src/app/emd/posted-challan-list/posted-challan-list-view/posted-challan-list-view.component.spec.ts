import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedChallanListViewComponent } from './posted-challan-list-view.component';

describe('PostedChallanListViewComponent', () => {
  let component: PostedChallanListViewComponent;
  let fixture: ComponentFixture<PostedChallanListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedChallanListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedChallanListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
