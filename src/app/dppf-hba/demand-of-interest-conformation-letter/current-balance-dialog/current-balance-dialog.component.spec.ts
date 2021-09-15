import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBalanceDialogComponent } from './current-balance-dialog.component';

describe('CurrentBalanceDialogComponent', () => {
  let component: CurrentBalanceDialogComponent;
  let fixture: ComponentFixture<CurrentBalanceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentBalanceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBalanceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
