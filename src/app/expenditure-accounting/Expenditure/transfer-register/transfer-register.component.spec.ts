import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRegisterComponent } from './transfer-register.component';

describe('TransferRegisterComponent', () => {
  let component: TransferRegisterComponent;
  let fixture: ComponentFixture<TransferRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
