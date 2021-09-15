import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePensionCaseComponent } from './delete-pension-case.component';

describe('DeletePensionCaseComponent', () => {
  let component: DeletePensionCaseComponent;
  let fixture: ComponentFixture<DeletePensionCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePensionCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePensionCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
