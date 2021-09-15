import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneChargeComponent } from './standalone-charge.component';

describe('StandaloneChargeComponent', () => {
  let component: StandaloneChargeComponent;
  let fixture: ComponentFixture<StandaloneChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandaloneChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandaloneChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
