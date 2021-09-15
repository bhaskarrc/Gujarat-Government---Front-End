import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionOrdersComponent } from './sanction-orders.component';

describe('SanctionOrdersComponent', () => {
  let component: SanctionOrdersComponent;
  let fixture: ComponentFixture<SanctionOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanctionOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
