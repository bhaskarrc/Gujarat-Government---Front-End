import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidFormAttachementSeventyEightComponent } from './cid-form-attachement-seventy-eight.component';

describe('CidFormAttachementSeventyEightComponent', () => {
  let component: CidFormAttachementSeventyEightComponent;
  let fixture: ComponentFixture<CidFormAttachementSeventyEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidFormAttachementSeventyEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidFormAttachementSeventyEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
