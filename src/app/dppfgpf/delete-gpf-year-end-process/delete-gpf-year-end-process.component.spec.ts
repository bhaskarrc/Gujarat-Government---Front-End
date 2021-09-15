import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteGpfYearEndProcessComponent } from './delete-gpf-year-end-process.component';

describe('DeleteGpfYearEndProcessComponent', () => {
  let component: DeleteGpfYearEndProcessComponent;
  let fixture: ComponentFixture<DeleteGpfYearEndProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteGpfYearEndProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteGpfYearEndProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
