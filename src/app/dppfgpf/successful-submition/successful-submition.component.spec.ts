import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulSubmitionComponent } from './successful-submition.component';

describe('SuccessfulSubmitionComponent', () => {
  let component: SuccessfulSubmitionComponent;
  let fixture: ComponentFixture<SuccessfulSubmitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulSubmitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulSubmitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
