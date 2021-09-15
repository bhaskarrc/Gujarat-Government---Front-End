import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsTransactionIdMappingComponent } from './nps-transaction-id-mapping.component';

describe('NpsTransactionIdMappingComponent', () => {
  let component: NpsTransactionIdMappingComponent;
  let fixture: ComponentFixture<NpsTransactionIdMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsTransactionIdMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsTransactionIdMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
