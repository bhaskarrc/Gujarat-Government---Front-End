import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenSearchDialogComponent } from './token-search-dialog.component';

describe('TokenSearchDialogComponent', () => {
  let component: TokenSearchDialogComponent;
  let fixture: ComponentFixture<TokenSearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenSearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
