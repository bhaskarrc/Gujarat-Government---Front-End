import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiBookTransferRegisterComponent } from './gi-book-transfer-register.component';

describe('GiBookTransferRegisterComponent', () => {
  let component: GiBookTransferRegisterComponent;
  let fixture: ComponentFixture<GiBookTransferRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiBookTransferRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiBookTransferRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
