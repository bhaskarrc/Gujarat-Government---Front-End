import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefundGenerationHbaComponent } from './refund-generation-hba.component';

describe('RefundGenerationHbaComponent', () => {
  let component: RefundGenerationHbaComponent;
  let fixture: ComponentFixture<RefundGenerationHbaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefundGenerationHbaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefundGenerationHbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
