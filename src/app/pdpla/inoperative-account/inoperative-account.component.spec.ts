import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InoperativeAccountComponent } from './inoperative-account.component';

describe('InoperativeAccountComponent', () => {
  let component: InoperativeAccountComponent;
  let fixture: ComponentFixture<InoperativeAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InoperativeAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InoperativeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
