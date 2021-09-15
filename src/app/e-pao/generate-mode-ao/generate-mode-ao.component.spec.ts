import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateModeAoComponent } from './generate-mode-ao.component';

describe('GenerateModeAoComponent', () => {
  let component: GenerateModeAoComponent;
  let fixture: ComponentFixture<GenerateModeAoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateModeAoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateModeAoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
