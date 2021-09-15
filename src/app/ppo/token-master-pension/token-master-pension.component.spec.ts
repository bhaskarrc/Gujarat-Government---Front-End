import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenMasterPensionComponent } from './token-master-pension.component';

describe('TokenMasterPensionComponent', () => {
  let component: TokenMasterPensionComponent;
  let fixture: ComponentFixture<TokenMasterPensionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenMasterPensionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenMasterPensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
