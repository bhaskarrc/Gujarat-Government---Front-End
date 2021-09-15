import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtcVerifyComponent } from './utc-verify-approve.component';

describe('UtcVerifyComponent', () => {
  let component: UtcVerifyComponent;
  let fixture: ComponentFixture<UtcVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtcVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtcVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
