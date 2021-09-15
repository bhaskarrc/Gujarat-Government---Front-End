import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionOfPayComponent } from './promotion-of-pay.component';

describe('PromotionOfPayComponent', () => {
  let component: PromotionOfPayComponent;
  let fixture: ComponentFixture<PromotionOfPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionOfPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionOfPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
