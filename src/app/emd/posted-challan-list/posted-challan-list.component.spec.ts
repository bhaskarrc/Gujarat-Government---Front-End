import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedChallanListComponent } from './posted-challan-list.component';

describe('PostedChallanListComponent', () => {
  let component: PostedChallanListComponent;
  let fixture: ComponentFixture<PostedChallanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedChallanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedChallanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
