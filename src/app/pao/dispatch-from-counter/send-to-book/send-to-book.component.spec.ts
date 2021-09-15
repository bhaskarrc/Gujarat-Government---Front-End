import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendToBookComponent } from './send-to-book.component';

describe('SendToBookComponent', () => {
  let component: SendToBookComponent;
  let fixture: ComponentFixture<SendToBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendToBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendToBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
