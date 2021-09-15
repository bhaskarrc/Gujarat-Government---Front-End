import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateModeHaComponent } from './generate-mode-ha.component';

describe('GenerateModeHaComponent', () => {
  let component: GenerateModeHaComponent;
  let fixture: ComponentFixture<GenerateModeHaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateModeHaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateModeHaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
