import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorflowDetailCMComponent } from './worflow-detail-cm.component';

describe('WorflowDetailCMComponent', () => {
  let component: WorflowDetailCMComponent;
  let fixture: ComponentFixture<WorflowDetailCMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorflowDetailCMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorflowDetailCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
