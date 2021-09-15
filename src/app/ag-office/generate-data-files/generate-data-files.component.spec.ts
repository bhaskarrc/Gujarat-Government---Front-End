import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateDataFilesComponent } from './generate-data-files.component';

describe('GenerateDataFilesComponent', () => {
  let component: GenerateDataFilesComponent;
  let fixture: ComponentFixture<GenerateDataFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateDataFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateDataFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
