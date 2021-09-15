import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedChallanListUpdateComponent } from './posted-challan-list-update.component';

describe('PostedChallanListUpdateComponent', () => {
  let component: PostedChallanListUpdateComponent;
  let fixture: ComponentFixture<PostedChallanListUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedChallanListUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedChallanListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
