import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifypopupdialogComponent } from './verifypopupdialog.component';

describe('VerifypopupdialogComponent', () => {
  let component: VerifypopupdialogComponent;
  let fixture: ComponentFixture<VerifypopupdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifypopupdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifypopupdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
