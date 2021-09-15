import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidFormAttachementSeventyFiveComponent } from './cid-form-attachement-seventy-five.component';

describe('CidFormAttachementSeventyFiveComponent', () => {
  let component: CidFormAttachementSeventyFiveComponent;
  let fixture: ComponentFixture<CidFormAttachementSeventyFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidFormAttachementSeventyFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidFormAttachementSeventyFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
