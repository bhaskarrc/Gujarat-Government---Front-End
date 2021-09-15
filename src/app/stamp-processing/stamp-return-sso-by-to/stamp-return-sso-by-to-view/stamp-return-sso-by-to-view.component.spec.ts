import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReturnSsoByToViewComponent } from './stamp-return-sso-by-to-view.component';

describe('StampReturnSsoByToViewComponent', () => {
  let component: StampReturnSsoByToViewComponent;
  let fixture: ComponentFixture<StampReturnSsoByToViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReturnSsoByToViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReturnSsoByToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
