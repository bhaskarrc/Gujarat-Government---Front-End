import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StampReturnToByStoListComponent } from './stamp-return-to-by-sto-list.component';

describe('StampReturnToByStoListComponent', () => {
  let component: StampReturnToByStoListComponent;
  let fixture: ComponentFixture<StampReturnToByStoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StampReturnToByStoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StampReturnToByStoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
