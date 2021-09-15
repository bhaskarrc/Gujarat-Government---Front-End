import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdcNoteComponent } from './ndc-note.component';

describe('NdcNoteComponent', () => {
  let component: NdcNoteComponent;
  let fixture: ComponentFixture<NdcNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdcNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdcNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
