import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeOrderScreenEightSixFiveEightComponent } from './office-order-screen-eight-six-five-eight.component';

describe('OfficeOrderScreenEightSixFiveEightComponent', () => {
  let component: OfficeOrderScreenEightSixFiveEightComponent;
  let fixture: ComponentFixture<OfficeOrderScreenEightSixFiveEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeOrderScreenEightSixFiveEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeOrderScreenEightSixFiveEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
