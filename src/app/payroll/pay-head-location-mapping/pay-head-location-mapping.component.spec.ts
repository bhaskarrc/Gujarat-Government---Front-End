import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayHeadLocationMappingComponent } from './pay-head-location-mapping.component';

describe('PayHeadLocationMappingComponent', () => {
  let component: PayHeadLocationMappingComponent;
  let fixture: ComponentFixture<PayHeadLocationMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayHeadLocationMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayHeadLocationMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
