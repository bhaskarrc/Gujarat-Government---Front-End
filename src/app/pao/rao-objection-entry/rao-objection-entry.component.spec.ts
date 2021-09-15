import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaoObjectionEntryComponent } from './rao-objection-entry.component';

describe('RaoObjectionEntryComponent', () => {
  let component: RaoObjectionEntryComponent;
  let fixture: ComponentFixture<RaoObjectionEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaoObjectionEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaoObjectionEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
