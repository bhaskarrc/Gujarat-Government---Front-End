import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeProcessComponent } from './finalize-process.component';

describe('FinalizeProcessComponent', () => {
  let component: FinalizeProcessComponent;
  let fixture: ComponentFixture<FinalizeProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizeProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizeProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
