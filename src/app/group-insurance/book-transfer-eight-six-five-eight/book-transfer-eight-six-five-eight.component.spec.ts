import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTransferEightSixFiveEightComponent } from './book-transfer-eight-six-five-eight.component';

describe('BookTransferEightSixFiveEightComponent', () => {
  let component: BookTransferEightSixFiveEightComponent;
  let fixture: ComponentFixture<BookTransferEightSixFiveEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookTransferEightSixFiveEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookTransferEightSixFiveEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
