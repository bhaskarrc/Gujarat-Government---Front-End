import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpsAccountTransferComponent } from './nps-account-transfer.component';

describe('NpsAccountTransferComponent', () => {
  let component: NpsAccountTransferComponent;
  let fixture: ComponentFixture<NpsAccountTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpsAccountTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpsAccountTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
