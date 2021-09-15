import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsAccountStatusComponent } from './nps-account-status.component';

describe('NpsAccountStatusComponent', () => {
  let component: NpsAccountStatusComponent;
  let fixture: ComponentFixture<NpsAccountStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsAccountStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsAccountStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
