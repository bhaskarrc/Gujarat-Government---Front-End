import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedChallanComponent } from './posted-challan.component';

describe('PostedChallanComponent', () => {
  let component: PostedChallanComponent;
  let fixture: ComponentFixture<PostedChallanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostedChallanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedChallanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
