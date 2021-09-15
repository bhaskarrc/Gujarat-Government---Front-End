import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExFreezAccountComponent } from './ex-freez-account.component';

describe('ExFreezAccountComponent', () => {
  let component: ExFreezAccountComponent;
  let fixture: ComponentFixture<ExFreezAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExFreezAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExFreezAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
