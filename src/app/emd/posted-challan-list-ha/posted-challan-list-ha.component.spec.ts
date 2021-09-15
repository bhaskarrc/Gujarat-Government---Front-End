import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedChallanListHAComponent } from './posted-challan-list-ha.component';

describe('PostedChallanListHAComponent', () => {
  let component: PostedChallanListHAComponent;
  let fixture: ComponentFixture<PostedChallanListHAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedChallanListHAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedChallanListHAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
