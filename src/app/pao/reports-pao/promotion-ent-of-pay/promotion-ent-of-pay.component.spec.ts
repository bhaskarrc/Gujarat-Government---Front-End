import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionEntOfPayComponent } from './promotion-ent-of-pay.component';

describe('PromotionEntOfPayComponent', () => {
  let component: PromotionEntOfPayComponent;
  let fixture: ComponentFixture<PromotionEntOfPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromotionEntOfPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionEntOfPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
