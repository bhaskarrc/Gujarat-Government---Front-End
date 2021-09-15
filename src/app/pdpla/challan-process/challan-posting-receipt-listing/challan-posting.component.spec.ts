import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallanPostingComponent } from './challan-posting.component';

describe('ChallanPostingComponent', () => {
  let component: ChallanPostingComponent;
  let fixture: ComponentFixture<ChallanPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallanPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallanPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
