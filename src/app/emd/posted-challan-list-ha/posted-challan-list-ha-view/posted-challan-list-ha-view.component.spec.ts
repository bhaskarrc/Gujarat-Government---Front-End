import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedChallanListHAViewComponent } from './posted-challan-list-ha-view.component';

describe('PostedChallanListHAViewComponent', () => {
  let component: PostedChallanListHAViewComponent;
  let fixture: ComponentFixture<PostedChallanListHAViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedChallanListHAViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedChallanListHAViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
