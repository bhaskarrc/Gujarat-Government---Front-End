import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubHeadDuplicateComponent } from './create-sub-head-duplicate.component';

describe('CreateSubHeadDuplicateComponent', () => {
  let component: CreateSubHeadDuplicateComponent;
  let fixture: ComponentFixture<CreateSubHeadDuplicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubHeadDuplicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubHeadDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
