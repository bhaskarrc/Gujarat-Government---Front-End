import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezAccountComponent } from './freez-account.component';

describe('FreezAccountComponent', () => {
  let component: FreezAccountComponent;
  let fixture: ComponentFixture<FreezAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreezAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreezAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
