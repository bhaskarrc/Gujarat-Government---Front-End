import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpClearAccountWisePostingComponent } from './up-clear-account-wise-posting.component';

describe('UpClearAccountWisePostingComponent', () => {
  let component: UpClearAccountWisePostingComponent;
  let fixture: ComponentFixture<UpClearAccountWisePostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpClearAccountWisePostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpClearAccountWisePostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
