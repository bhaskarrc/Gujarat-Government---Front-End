import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateLopTextFileComponent } from './generate-lop-text-file.component';

describe('GenerateLopTextFileComponent', () => {
  let component: GenerateLopTextFileComponent;
  let fixture: ComponentFixture<GenerateLopTextFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateLopTextFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateLopTextFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
