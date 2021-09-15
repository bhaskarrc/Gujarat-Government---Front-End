import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTransferRegisterComponent } from './book-transfer-register.component';

describe('BookTransferRegisterComponent', () => {
  let component: BookTransferRegisterComponent;
  let fixture: ComponentFixture<BookTransferRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTransferRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTransferRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
