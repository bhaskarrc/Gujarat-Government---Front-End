import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidFormAttachementSeventyNineComponent } from './cid-form-attachement-seventy-nine.component';

describe('CidFormAttachementSeventyNineComponent', () => {
  let component: CidFormAttachementSeventyNineComponent;
  let fixture: ComponentFixture<CidFormAttachementSeventyNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidFormAttachementSeventyNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidFormAttachementSeventyNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
