import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSubHeadComponent } from './new-sub-head.component';

describe('NewSubHeadComponent', () => {
  let component: NewSubHeadComponent;
  let fixture: ComponentFixture<NewSubHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSubHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSubHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
