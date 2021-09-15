import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReturnToByStoViewComponent } from './stamp-return-to-by-sto-view.component';

describe('StampReturnToByStoViewComponent', () => {
  let component: StampReturnToByStoViewComponent;
  let fixture: ComponentFixture<StampReturnToByStoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReturnToByStoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReturnToByStoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
