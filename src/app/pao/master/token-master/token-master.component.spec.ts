import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenMasterComponent } from './token-master.component';

describe('TokenMasterComponent', () => {
  let component: TokenMasterComponent;
  let fixture: ComponentFixture<TokenMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
