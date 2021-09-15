import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReturnSsoByToComponent } from './stamp-return-sso-by-to.component';

describe('StampReturnSsoByToComponent', () => {
  let component: StampReturnSsoByToComponent;
  let fixture: ComponentFixture<StampReturnSsoByToComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReturnSsoByToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReturnSsoByToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
