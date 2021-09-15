import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancleChequeNewComponent } from './cancle-cheque-new.component';

describe('CancleChequeNewComponent', () => {
  let component: CancleChequeNewComponent;
  let fixture: ComponentFixture<CancleChequeNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancleChequeNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancleChequeNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
