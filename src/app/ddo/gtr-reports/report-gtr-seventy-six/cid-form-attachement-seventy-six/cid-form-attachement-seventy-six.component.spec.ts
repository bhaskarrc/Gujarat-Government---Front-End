import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidFormAttachementSeventySixComponent } from './cid-form-attachement-seventy-six.component';

describe('CidFormAttachementSeventySixComponent', () => {
  let component: CidFormAttachementSeventySixComponent;
  let fixture: ComponentFixture<CidFormAttachementSeventySixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidFormAttachementSeventySixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidFormAttachementSeventySixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
