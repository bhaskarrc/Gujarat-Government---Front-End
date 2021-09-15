import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedCasesComponent } from './verified-cases.component';

describe('VerifiedCasesComponent', () => {
  let component: VerifiedCasesComponent;
  let fixture: ComponentFixture<VerifiedCasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedCasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
