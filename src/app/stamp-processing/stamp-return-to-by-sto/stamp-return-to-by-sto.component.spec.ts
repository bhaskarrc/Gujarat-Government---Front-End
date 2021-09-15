import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReturnToByStoComponent } from './stamp-return-to-by-sto.component';

describe('StampReturnToByStoComponent', () => {
  let component: StampReturnToByStoComponent;
  let fixture: ComponentFixture<StampReturnToByStoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReturnToByStoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReturnToByStoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
