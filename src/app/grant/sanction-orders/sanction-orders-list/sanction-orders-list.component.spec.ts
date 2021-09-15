import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionOrdersListComponent } from './sanction-orders-list.component';

describe('SanctionOrdersListComponent', () => {
  let component: SanctionOrdersListComponent;
  let fixture: ComponentFixture<SanctionOrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanctionOrdersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
