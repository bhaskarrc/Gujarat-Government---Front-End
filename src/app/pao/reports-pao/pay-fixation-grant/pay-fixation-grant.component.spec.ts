import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFixationGrantComponent } from './pay-fixation-grant.component';

describe('PayFixationGrantComponent', () => {
  let component: PayFixationGrantComponent;
  let fixture: ComponentFixture<PayFixationGrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayFixationGrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayFixationGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
