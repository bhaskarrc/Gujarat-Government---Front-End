import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LcGenerateAuthorizationLetterComponent } from './lc-generate-authorization-letter.component';

describe('LcGenerateAuthorizationLetterComponent', () => {
  let component: LcGenerateAuthorizationLetterComponent;
  let fixture: ComponentFixture<LcGenerateAuthorizationLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LcGenerateAuthorizationLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LcGenerateAuthorizationLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
