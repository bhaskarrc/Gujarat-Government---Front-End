import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FORMGTRComponent } from './form-gtr.component';

describe('FORMGTRComponent', () => {
  let component: FORMGTRComponent;
  let fixture: ComponentFixture<FORMGTRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FORMGTRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FORMGTRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
