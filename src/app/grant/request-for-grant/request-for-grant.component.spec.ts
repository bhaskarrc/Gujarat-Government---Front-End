import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForGrantComponent } from './request-for-grant.component';

describe('RequestForGrantComponent', () => {
  let component: RequestForGrantComponent;
  let fixture: ComponentFixture<RequestForGrantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestForGrantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
