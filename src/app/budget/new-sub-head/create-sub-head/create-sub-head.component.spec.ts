import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubHeadComponent } from './create-sub-head.component';

describe('CreateSubHeadComponent', () => {
  let component: CreateSubHeadComponent;
  let fixture: ComponentFixture<CreateSubHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
