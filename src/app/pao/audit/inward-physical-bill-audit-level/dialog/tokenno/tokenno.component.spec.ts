import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokennoComponent } from './tokenno.component';

describe('TokennoComponent', () => {
  let component: TokennoComponent;
  let fixture: ComponentFixture<TokennoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokennoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokennoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
