import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestForGrantListComponent } from './request-for-grant-list.component';

describe('RequestForGrantListComponent', () => {
  let component: RequestForGrantListComponent;
  let fixture: ComponentFixture<RequestForGrantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestForGrantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestForGrantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
