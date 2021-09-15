import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReturnSsoByToListComponent } from './stamp-return-sso-by-to-list.component';

describe('StampReturnSsoByToListComponent', () => {
  let component: StampReturnSsoByToListComponent;
  let fixture: ComponentFixture<StampReturnSsoByToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReturnSsoByToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReturnSsoByToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
