import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularIndentPreparationComponent } from './regular-indent-preparation.component';

describe('RegularIndentPreparationComponent', () => {
  let component: RegularIndentPreparationComponent;
  let fixture: ComponentFixture<RegularIndentPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularIndentPreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularIndentPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
